import "./style.css";

const app = document.querySelector("#app");

if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", function (event) {
    console.log(event.acceleration.x + " m/s2");
    app.innerHTML = `<h1>${event.acceleration.x} m/s2</h1>`;
  });
}
setupCounter(document.querySelector("#counter"));
