import "./style.css";

const app = document.querySelector("#app");
const btn = document.querySelector("#btn");

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
    app.innerHTML = `<h1>Acceleration: ${event.acceleration.x}, ${event.acceleration.y}, ${event.acceleration.z} m/s2</h1>`;
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
    app.innerHTML += `<h1>Orientation: ${event.alpha}, ${event.beta}, ${event.gamma} deg</h1>`;
  });
}

btn.addEventListener("click", () => {
  if ("vibrate" in navigator) {
    navigator.vibrate(1000); // czas trwania wibracji w milisekundach
  }
});
