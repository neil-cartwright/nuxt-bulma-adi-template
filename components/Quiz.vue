<template>
  <div>
    <div class="quiz has-text-centered" v-if="!endOfTest">
      <h1 class="title is-size-6 has-background-warning py-2">
        Question {{ questionNumber + 1 }}:
        {{ questions[questionNumber].question }}
      </h1>
      <div class="score tag is-success" v-if="questionsCompleted > 0">
        {{ score }} / {{ questions.length }}
      </div>
      <figure class="is-128x128">
        <img
          :src="questions[questionNumber].img"
          :alt="questions[questionNumber].imgAlt"
        />
      </figure>
      <br />
      <div class="" v-if="promptToMakeASelection">
        <span class="has-text-danger">
          <span class="icon">
            <i class="fa fa-warning"></i>
          </span>
          Please choose an answer</span
        >
      </div>
      <ul :class="{ 'has-answered': hasSubmittedAnswer }">
        <li
          v-for="(answer, idx) in questions[questionNumber].answers"
          :key="idx"
          @click="selectAnswer($event)"
          :class="isTheCorrectAnswer(answer)"
        >
          <a class="button is-fullwidth is-small my-1">{{ answer }}</a>
        </li>
      </ul>
      <br />

      <div class="level">
        <div class="level-item" v-if="!hasSubmittedAnswer">
          <button
            class="button"
            @click="checkAnswer()"
            :class="{ 'check-answer-alert': checkAnswerAlert }"
          >
            Check answer
          </button>
        </div>

        <div class="level-item" v-show="hasSubmittedAnswer">
          <div class="is-show-answer my-2">
            <span v-if="gotTheAnswerRight">
              <span
                class="icon is-large has-text-success has-text-weight-bold animate__animated animate__lightSpeedInRight"
              >
                <i class="fad fa-check-circle fa-2x"></i>
              </span>
            </span>
            <span v-else>
              <span
                class="icon is-large has-text-danger has-text-weight-bold animate__animated animate__headShake"
              >
                <i class="fad fa-times-circle fa-2x"></i>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-item" v-if="showNext">
          <button class="button is-text" @click="nextQuestion">Next</button>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- end of test screen -->
      <div class="content has-text-centered">
        <div>
          <p class="tag is-warning is-large my-2">
            You scored {{ score }} out of {{ questions.length }}
          </p>
          <br />
          <p class="tag is-success is-large" v-if="score == questions.length">
            Very Good
          </p>
          <p
            class="tag is-orange has-text-white is-large"
            v-else-if="score < questions.length && score > questions.length - 2"
          >
            Nice
          </p>
          <p class="tag is-danger is-large" v-else>Better luck next time</p>
          <br />
          <button class="button is-medium is-success" @click="initTest()">
            Try again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import questions from "@/assets/js/quiz-questions.js";

export default {
  data() {
    return {
      questions: questions,
      questionNumber: 0,
      questionsCompleted: 0,
      score: 0,
      promptToMakeASelection: false,
      hasMadeASelection: false,
      hasSubmittedAnswer: false,
      checkAnswerAlert: false,
      gotTheAnswerRight: false,
      theCorrectAnswer: "",
      showNext: false,
      endOfTest: false,
    };
  },
  computed: {},
  methods: {
    nextQuestion() {
      this.questionNumber++;
      this.initQuestion();
      this.getCorrectAnswer();
    },

    initQuestion() {
      // check if at end and reset variables and classes
      this.isTestOver();
      this.showNext = false;
      this.hasMadeASelection = false;
      this.hasSubmittedAnswer = false;
      (this.checkAnswerAlert = false), (this.gotTheAnswerRight = false);
      document.querySelectorAll(".is-incorrect").forEach((el) => {
        el.classList.remove("is-incorrect");
      });
      document.querySelectorAll(".selected").forEach((el) => {
        el.classList.remove("selected");
      });
      document.querySelectorAll(".is-correct").forEach((el) => {
        el.classList.remove("is-correct");
      });
    },

    selectAnswer(event) {
      this.promptToMakeASelection = false;
      if (!this.hasSubmittedAnswer) {
        this.toggleTheClass("selected", event);
        this.hasMadeASelection = true;
      }
      this.checkAnswerAlert = true;
    },

    checkAnswer() {
      if (this.hasMadeASelection) {
        this.hasSubmittedAnswer = true;
        this.questionsCompleted++;
        this.theSelectedAnswer = document.querySelector(".selected");
        let ans = this.theSelectedAnswer.firstElementChild.textContent;
        if (this.getCorrectAnswer() == ans) {
          this.gotTheAnswerRight = true;
          this.score++;
          this.theSelectedAnswer.classList.add("is-correct");
        } else {
          this.gotTheAnswerRight = false;
          this.theSelectedAnswer.classList.add("is-incorrect");
        }

        this.isTestOver();
      } else {
        this.promptToMakeASelection = true;
      }
    },

    initTest() {
      this.endOfTest = false;
      this.questionNumber = 0;
      this.score = 0;
      this.questionsCompleted = 0;
      this.initQuestion();
    },

    isTheCorrectAnswer(answer) {
      // setTimeout not working
      return {
        "is-the-correct-answer":
          this.hasSubmittedAnswer && answer == this.theCorrectAnswer,
      };
    },

    isTestOver() {
      if (this.questionsCompleted == this.questions.length) {
        this.showNext = false;
        this.endOfTest = true;
      } else {
        this.showNext = true;
      }
    },

    // helpers
    toggleTheClass(theClass, theEventObject) {
      let x = document.querySelectorAll("." + theClass);
      x.forEach((y) => {
        if (y.classList.contains(theClass)) {
          y.classList.remove(theClass);
        }
      });
      theEventObject.currentTarget.classList.add(theClass);
    },

    getCorrectAnswer() {
      return (this.theCorrectAnswer = questions[this.questionNumber].correct);
    },
  },

  mounted() {
    this.getCorrectAnswer();
  },
};
</script>

<style lang="scss" scoped>
ul:not(.has-answered) li a:hover {
  background-color: $orange;
  color: $white;
}
li.selected.is-incorrect a {
  background-color: $danger !important;
  color: $white-bis;
  animation: headShake;
  animation-duration: 2s;
}
li.selected a {
  background-color: $navy !important;
  color: $white;
}
.has-answered li a {
  transition: background-color 3s;
}
li.is-the-correct-answer a {
  animation: pulse;
  animation-duration: 1s;
  animation-delay: 2s;
  background-color: $success;
  color: $white-bis;
}
.score {
  position: absolute;
  left: 2em;
}
.button {
  transition: all 0.1s;
}
.button.check-answer-alert {
  background: $orange;
  color: $white;
  animation: pulse;
  animation-duration: 2s;
}
</style>
