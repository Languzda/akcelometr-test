import "./style.css";

const app = document.querySelector("#app");
const btn = document.querySelector("#btn");

const acc = document.querySelector("#acc");
const ori = document.querySelector("#ori");

if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
  window.addEventListener("devicemotion", function (event) {
    console.log(
      "Acceleration: " +
        event.acceleration.x +
        ", " +
        event.acceleration.y +
        ", " +
        event.acceleration.z +
        " m/s2"
    );
    acc.innerHTML = ` ${event.acceleration.x}, ${event.acceleration.y}, ${event.acceleration.z} m/s2`;
  });

  window.addEventListener("deviceorientation", function (event) {
    console.log(
      "Orientation: " +
        event.alpha +
        ", " +
        event.beta +
        ", " +
        event.gamma +
        " deg"
    );
    ori.innerHTML = ` ${event.alpha}, ${event.beta}, ${event.gamma} deg`;
  });
}

btn.addEventListener("click", () => {
  if ("vibrate" in navigator) {
    navigator.vibrate(1000); // czas trwania wibracji w milisekundach
  }
});
