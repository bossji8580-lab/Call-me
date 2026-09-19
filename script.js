const people = [
  {
    name: "Riddhi Rathore",
    role: "Sweet Talk Expert",
    img: "IMG_20260920_010116_975.jpg",
    busy: false
  },
  {
    name: "Kavya Thakur",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_568.jpg",
    busy: false
  },
  {
    name: "Priya Sharma",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_287.jpg",
    busy: false
  },
  {
    name: "Neha Verma",
    role: "Sweet Talk Expert",
    img: "IMG_20260920_010117_390.jpg",
    busy: false
  },
  {
    name: "Simran Kaur",
    role: "Live Chat Expert",
    img: "IMG_20260920_010117_034.jpg",
    busy: false
  },
  {
    name: "Pooja Singh",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_153.jpg",
    busy: false
  }
];

const models = document.getElementById("models");

people.forEach((person, index) => {

  models.innerHTML += `
    <div class="card">

      <div class="cardImg">
        <img
          src="${person.img}"
          alt="${person.name}"
        >

        <span class="live">● LIVE</span>
      </div>

      <div class="info">

        <div class="name">
          ${person.name}
        </div>

        <div class="role">
          ${person.role}
        </div>

        <button
          class="call"
          onclick="startCall(${index})"
        >
          📞 Start Video Call
        </button>

        <div class="presence">
          🟢 Online Now
        </div>

      </div>

    </div>
  `;
});


/* VIDEO CALL POPUP */

function startCall(index) {

  const person = people[index];

  document.getElementById("popImg").src =
    person.img;

  document.getElementById("popName").innerText =
    person.name;

  document.getElementById("popRole").innerText =
    person.role;

  document.getElementById("calling").innerText =
    "Connecting...";

  document.getElementById("timer").innerText =
    "00:03";

  document
    .getElementById("popup")
    .classList.add("show");

  let seconds = 3;

  const callTimer = setInterval(() => {

    seconds--;

    if (seconds >= 0) {

      document.getElementById("timer").innerText =
        "00:0" + seconds;

    }

    if (seconds <= 0) {

      clearInterval(callTimer);

      document.getElementById("calling").innerText =
        "💗 Ready — install the app to continue";

    }

  }, 1000);
}


/* CLOSE POPUP */

function closePopup() {

  document
    .getElementById("popup")
    .classList.remove("show");

}


/* DOWNLOAD APK */

function downloadApp() {

  window.location.href = "app.apk";

}


/* SMALL POPUP MESSAGE */

function popup(message) {

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.innerText = message;

  document
    .getElementById("toast")
    .appendChild(toast);

  setTimeout(() => {

    toast.remove();

  }, 3000);

}


/* HOME */

function topPage() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* OFFER COUNTDOWN */

let seconds = 207;

setInterval(() => {

  seconds--;

  if (seconds < 0) {
    seconds = 207;
  }

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    seconds % 60;

  document.getElementById(
    "offerTimer"
  ).innerText =
    "0" +
    minutes +
    ":" +
    String(remaining).padStart(2, "0");

}, 1000);


/* AUTOMATIC NOTIFICATIONS */

setTimeout(() => {

  popup(
    "💬 New Message — Someone is waiting for a video call"
  );

}, 9000);


setTimeout(() => {

  popup(
    "🔥 Trending — New models are online"
  );

}, 20000);


setTimeout(() => {

  popup(
    "📲 Install the app to continue"
  );

}, 32000);
