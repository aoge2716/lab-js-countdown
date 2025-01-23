const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button
const btn = document.querySelector("#start-btn");
btn.addEventListener("click",startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  // disable timer once button is clicked
  btn.disabled = true;
  console.log("startCountdown called!");
  // get the time element 
  const timer = document.querySelector("#time");
  // start interval for the countdown
  const interval = setInterval(()=>{
    remainingTime--;
    // clear interval once time reaches 0
    if (remainingTime<1){
      clearInterval(interval);
      console.log("timeUP");
      // reset timer 
      remainingTime = 10;
      console.log("end of code ", remainingTime);
      // show toast with custom message
      showToast("yoyo");
    }
    // timer.textContent = "";
    timer.textContent = remainingTime;
    console.log(remainingTime);
  },1000);
}



// showToast();
// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");
  const toast = document.querySelector("#toast");
  toast.style.visibility = "visible";
  // change the text content for the toast if theres message passed to the function
  if (message){
    toast.firstElementChild.textContent = message;
  }
  // listen to the close button
  const toastBtn = document.querySelector("#close-toast");
  toastBtn.addEventListener("click",()=>{
    btn.disabled=false;
    toast.style.visibility = "hidden";
  });
}
