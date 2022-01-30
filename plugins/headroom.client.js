import Headroom from "headroom.js";

let nav = document.querySelector(".navbar");

let headroom = new Headroom(nav, {
  offset: 80,
  tolerance: {
    up: 10,
    down: 5,
  },
});

headroom.init();
