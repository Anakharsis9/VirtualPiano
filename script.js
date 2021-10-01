let keys = [
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyW",
  "KeyE",
  "KeyT",
  "KeyY",
  "KeyU",
];

window.addEventListener("keydown", function (e) {
  if (!keys.includes(e.code)) return;

  let sound = new Audio("./" + e.code[3] + ".mp3");
  sound.play();
});
