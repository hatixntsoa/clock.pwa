function clock(){
  let hour = document.querySelector(".hour");
  let  minute = document.querySelector(".minute");
  let  second = document.querySelector(".second");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}

var interval = setInterval(clock, 1000);
