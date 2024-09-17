let imgPlace = document.querySelectorAll(".imgPlace");
console.log(imgPlace);

let json = new XMLHttpRequest();
json.open("GET", "./data.json");
json.send();
console.log(json);
json.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsonData = JSON.parse(this.responseText);

    let day = document.querySelector(".day");
    let week = document.querySelector(".week");
    let month = document.querySelector(".month");

    let t1 = document.querySelectorAll(".t1");
    let t2 = document.querySelectorAll(".t2");
    day.onclick = function () {
      change1();
    };
    week.onclick = function () {
      change2();
    };
    month.onclick = function () {
      change3();
    };
    function change1() {
      for (let i = 0; i < t1.length; i++) {
        t1[i].textContent = jsonData[i].timeframes.daily.current;
        t2[i].textContent = jsonData[i].timeframes.daily.previous;
      }
      week.style.color = "var(--Desaturated-blue)";
      month.style.color = "var(--Desaturated-blue)";
      day.style.color = "white";
    }
    function change2() {
      for (let i = 0; i < t1.length; i++) {
        t1[i].textContent = jsonData[i].timeframes.weekly.current;
        t2[i].textContent = jsonData[i].timeframes.weekly.previous;
      }
      day.style.color = "var(--Desaturated-blue)";
      month.style.color = "var(--Desaturated-blue)";
      week.style.color = "white";
    }
    function change3() {
      for (let i = 0; i < t1.length; i++) {
        t1[i].textContent = jsonData[i].timeframes.monthly.current;
        t2[i].textContent = jsonData[i].timeframes.monthly.previous;
      }
      day.style.color = "var(--Desaturated-blue)";
      week.style.color = "var(--Desaturated-blue)";
      month.style.color = "white";
    }
  }
};
