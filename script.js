function updateTime() {
    const hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
      greeting = `Hello, Good Morning! &#9728;<br> XXXX`
    } else if (hour < 18) {
      greeting = `Hello, Good Afternoon! &#9729; <br> XXXX`
    } else {
      greeting = `Hello, Good Evening! &#9789; <br> XXXX`
    }
  
    var datetime = new Date().toLocaleTimeString();
    document.getElementById("time").textContent = datetime;
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date().toLocaleString('en-IN', options);
    document.getElementById("date").textContent = date;
    document.getElementById("greeting").innerHTML = greeting;
  }
  updateTime();
  setInterval(updateTime, 1000);

  


document.addEventListener("DOMContentLoaded", ()=>{
  const button=document.querySelector(".qoute-btn");
  const qoute=document.querySelector("header q");
  const cite=document.querySelector("header cite");

  async function updateQuote(){
    const response = await 
    fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      qoute.textContent = data.content;
      cite.textContent = data.author;
    } else {
      qoute.textContent = "An error occured";
      console.log(data);
    }
  }
  button.addEventListener("click", updateQuote);

  updateQuote();
  });


