const questions = [
  {
    question: "What is the national speed limit for cars on dual carriageways?",
    answers: ["50mph", "60mph", "70mph", "80mph"],
    correct: "70mph",
    img: require("~/assets/images/road-signs/national-speed-limit.png"),
    imgAlt: "national speed limit",
  },
  {
    question: "what does this sign mean?",
    answers: ["no stopping", "no parking", "no entry", "no crossing"],
    correct: "no stopping",
    img: require("~/assets/images/road-signs/no-stopping.png"),
    imgAlt: "no stopping",
  },
  {
    question: "where would you see this sign?",
    answers: [
      "Approaching a hazard",
      "Approaching a motorway slip lane",
      "Approaching a level crossing",
      "Approaching a roundabout",
    ],
    correct: "Approaching a level crossing",
    img: require("~/assets/images/road-signs/countdown-to-level-crossing-3.png"),
    imgAlt: "no stopping",
  },
];

export default questions;
