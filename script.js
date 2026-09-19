const modal = document.getElementById("appModal");
const closeModal = document.getElementById("closeModal");

function openAppModal(){
  modal.classList.add("show");
}

function hideAppModal(){
  modal.classList.remove("show");
}


/* Video Call button */

document.querySelectorAll(".call-btn").forEach(button => {

  button.addEventListener("click", function(event){

    event.preventDefault();

    openAppModal();

  });

});


/* Popup close */

closeModal.addEventListener("click", hideAppModal);

modal.addEventListener("click", function(event){

  if(event.target === modal){
    hideAppModal();
  }

});


/* Countdown */

let seconds = 5 * 60;

const timer = document.getElementById("timer");

setInterval(function(){

  seconds--;

  if(seconds < 0){
    seconds = 5 * 60;
  }

  const minutes =
    String(Math.floor(seconds / 60)).padStart(2,"0");

  const secs =
    String(seconds % 60).padStart(2,"0");

  timer.textContent = minutes + ":" + secs;

},1000);
