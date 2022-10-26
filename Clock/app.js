console.log("he");

const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");


setInterval(() => {
    setHandles()
}, 1000)

function setHandles() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const extraMinutesAngle = seconds * 0.1
  const minutesAngle = minutes * 6 + extraMinutesAngle

  const extraHoursAngle = minutes * 0.5
  const hoursAngle = hours * 30 + extraHoursAngle
  

  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
}
