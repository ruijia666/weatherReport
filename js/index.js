window.onload = () => {
  function $(x) {
    let m = x.split("");
    if (m[0] == ".") {
      let n = m.slice(1);
      n = String(n);
      z = n.replace(/,/g, "");
      return document.getElementsByClassName(z)[0];
    }
    if (m[0] != ".") {
      return document.getElementById("x");
    }
  }
  $('.search').onmouseout = ()=>{
      $('.record').style.display = 'none'
  }
  $('.record').onmousemove = ()=>{
    $('.record').style.display = 'block'
  }
  const input = document.getElementsByTagName("input")[0];
  const mic = document.getElementsByClassName("mic")[0];
  const nav1 = document.getElementsByClassName("nav-1")[0];
  const nav2 = document.getElementsByClassName("nav-2")[0];
  const nav3 = document.getElementsByClassName("nav-3")[0];
  const toBack = document.getElementsByClassName("return");
  const coreTwo = document.getElementsByClassName("core-two")[0];
  const core = document.getElementsByClassName("core")[0];
  let value;
  
  let res2
  const ul = document.getElementsByClassName("record-ul")[0];
  const weatherList = document.getElementsByClassName("weather-list");
  // const word = document.getElementsByClassName('word')
  const day = document.getElementsByClassName("day");
  const posi = document.getElementsByClassName("posi");
  const temp = document.getElementsByClassName("temp");
  const Ajax = (method, url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            let res = JSON.parse(xhr.response);
            resolve(res);
          } else {
            reject("请求失败");
          }
        }
      };
    });
  };
  const fun = async () => {
    try {
      const res = await Ajax(
        "get",`https://www.yiketianqi.com/free/week?unescape=1&appid=42361885&appsecret=fytXTfe5&city=${value}`
      );
      for (let i = 0; i < 7; i++) {
        day[i].innerHTML = res.data[i].date;
        posi[i].innerHTML = res.data[i].wea;
        temp[i].innerHTML =
          res.data[i].tem_day + "℃/" + res.data[i].tem_night + "℃";
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fun2 = async () => {
    try {
      const res = await Ajax(
        "get",
        `https://yiketianqi.com/api?unescape=1&version=v6&appid=42361885&appsecret=fytXTfe5&city=${value}`
      );
      document.getElementsByClassName("temperture")[0].innerHTML =
        res.tem + "℃";
      document.getElementsByClassName("weather-case")[0].innerHTML = res.wea;
      document.getElementsByClassName("wind")[0].innerHTML = res.win;
      document.getElementsByClassName("activity")[0].innerHTML = res.air_tips;
      document.getElementsByClassName("current-place")[0].innerHTML = res.city
      value = res.city
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fun3 = async () => {
    try {
      const res = await Ajax(
        "get",
        `https://yiketianqi.com/api?unescape=1&version=v1&appid=42361885&appsecret=fytXTfe5&city=${value}`
      );
      for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("head")[i].innerHTML =
          res.data[i].index[i].title;
        document.getElementsByClassName("body")[i].innerHTML =
          res.data[i].index[i].level;
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fun4 = async () => {
    try {
      const res = await Ajax(
        "get",
        `https://yiketianqi.com/api?unescape=1&version=v6&appid=42361885&appsecret=fytXTfe5&city=${value}`
      );
      document.getElementsByClassName("temperture")[0].innerHTML =
        res.tem + "℃";
      document.getElementsByClassName("weather-case")[0].innerHTML = res.wea;
      document.getElementsByClassName("wind")[0].innerHTML = res.win;
      document.getElementsByClassName("activity")[0].innerHTML = res.air_tips;
      document.getElementsByClassName("current-place")[0].innerHTML = res.city
      value = res.city
      const li = document.createElement("li");
      ul.appendChild(li);
     console.log(value);
      li.innerHTML =
        `<div class ='newvalue'>${value}</div>` +
        "<div class = 'cha'>&#xe6d5;</div>";
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  for (let i = 0; i < 3; i++) {
    toBack[i].onclick = () => {
      coreTwo.style.display = "none";
      core.style.display = "block";
      nav1.style.color = "black";
      nav2.style.color = "black";
      nav3.style.color = "black";
      document.getElementsByClassName("record")[0].style.display = "none";
    };
  }
  nav1.onclick = () => {
    coreTwo.style.display = "flex";
    core.style.display = "none";
    coreTwo.style.transform = "translateX(-" + 0 + "%)";
    nav1.style.color = "rgb(255, 165, 47)";
    nav2.style.color = "black";
    nav3.style.color = "black";
    document.getElementsByClassName("record")[0].style.display = "none";

    fun();
  };
  nav2.onclick = () => {
    coreTwo.style.display = "flex";
    core.style.display = "none";
    //细看引号嵌套
    coreTwo.style.transform = "translateX(-" + 33.3 + "%)";
    nav2.style.color = "rgb(255, 165, 47)";
    nav1.style.color = "black";
    nav3.style.color = "black";
    document.getElementsByClassName("record")[0].style.display = "none";
    fun2();
  };
  nav3.onclick = () => {
    coreTwo.style.display = "flex";
    core.style.display = "none";
    coreTwo.style.transform = "translateX(-" + 66.6 + "%)";
    nav3.style.color = "rgb(255, 165, 47)";
    nav2.style.color = "black";
    nav1.style.color = "black";
    document.getElementsByClassName("record")[0].style.display = "none";
    fun3();
  };
  mic.onclick = () => {
    console.log(input.value);
    value = input.value;
    document.getElementsByClassName("current-place")[0].innerHTML = value;
    coreTwo.style.display = "flex";
    core.style.display = "none";
    input.value = ''
    //细看引号嵌套
    coreTwo.style.transform = "translateX(-" + 33.3 + "%)";
    nav2.style.color = "rgb(255, 165, 47)";
    nav1.style.color = "black";
    nav3.style.color = "black";
    document.getElementsByClassName("record")[0].style.display = "none";
    fun2();
    
    input.onclick = () => {
      document.getElementsByClassName("record")[0].style.display = "block";
    };
   fun4()
    let newVlaue = document.getElementsByClassName("newvalue")
    let cha = document.getElementsByClassName('cha')
    //箭头函数this指向window
    let rul = document.getElementsByClassName('record-ul')[0]
    let rli = document.getElementsByTagName('li')
   setInterval(() => {
    for(let i= 0 ;i<rli.length ;i++){
      cha[i].onclick = function(){
        rul.removeChild(rli[i])
        if (rli[0] == undefined) {
          document.getElementsByClassName("record")[0].style.display = "none";
      }
      }
    newVlaue[i].onclick = function()  {
      value = this.innerHTML;
      console.log(value )
      document.getElementsByClassName("current-place")[0].innerHTML = value;
      coreTwo.style.display = "flex";
      core.style.display = "none";
      //细看引号嵌套
      coreTwo.style.transform = "translateX(-" + 33.3 + "%)";
      nav2.style.color = "rgb(255, 165, 47)";
      nav1.style.color = "black";
      nav3.style.color = "black";
      document.getElementsByClassName("record")[0].style.display = "none";
      fun2();
    };}
   }, 300);
   };
};
