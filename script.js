const people = [
  {
    name: "Riddhi Rathore",
    role: "Sweet Talk Expert",
    img: "IMG_20260920_010116_975.jpg"
  },
  {
    name: "Kavya Thakur",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_568.jpg"
  },
  {
    name: "Priya Sharma",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_287.jpg"
  },
  {
    name: "Neha Verma",
    role: "Sweet Talk Expert",
    img: "IMG_20260920_010117_390.jpg"
  },
  {
    name: "Simran Kaur",
    role: "Live Chat Expert",
    img: "IMG_20260920_010117_034.jpg"
  },
  {
    name: "Pooja Singh",
    role: "Video Call Expert",
    img: "IMG_20260920_010117_153.jpg"
  }
];

const models = document.getElementById("models");

if (models) {
  people.forEach((person, index) => {
    models.innerHTML += `
      <div class="card">
        <div class="cardImg">
          <img src="${person.img}" alt="${person.name}">
          <span class="live">● LIVE</span>
        </div>

        <div class="info">
          <div class="name">${person.name}</div>
          <div class="role">${person.role}</div>

          <button class="call" onclick="startCall(${index})">
            📞 Start Video Call
          </button>

          <div class="presence">🟢 Online Now</div>
        </div>
      </div>
    `;
  });
}


/* VIDEO CALL */

function startCall(index) {
  const person = people[index];

  const modal = document.getElementById("callModal");
  const photo = document.getElementById("callPhoto");
  const name = document.getElementById("callName");
  const role = document.getElementById("callRole");
  const status = document.getElementById("callStatus");
  const timerText = document.getElementById("callTimer");

  if (!modal) {
    alert("Call popup load nahi hua. index.html check karo.");
    return;
  }

  photo.src = person.img;
  name.innerText = person.name;
  role.innerText = person.role;

  status.innerText = "Connecting...";
  timerText.innerText = "00:03";

  modal.classList.add("show");

  let time = 3;

  const timer = setInterval(() => {
    time--;

    if (time > 0) {
      timerText.innerText = "00:0" + time;
    } else {
      timerText.innerText = "00:00";
      clearInterval(timer);

      status.innerText =
        "💗 Ready — install the app to continue";
    }
  }, 1000);
}


function closeModal() {
  const modal = document.getElementById("callModal");

  if (modal) {
    modal.classList.remove("show");
  }
}


/* DOWNLOAD POPUP */

function openDownload() {
  const modal = document.getElementById("downloadModal");

  if (modal) {
    modal.classList.add("show");
  }
}


function closeDownload() {
  const modal = document.getElementById("downloadModal");

  if (modal) {
    modal.classList.remove("show");
  }
}


/* GENERAL POPUP */

function showPopup(message) {
  const modal = document.getElementById("generalModal");
  const messageBox = document.getElementById("generalMessage");

  if (modal && messageBox) {
    messageBox.innerText = message;
    modal.classList.add("show");
  }
}


function closeGeneral() {
  const modal = document.getElementById("generalModal");

  if (modal) {
    modal.classList.remove("show");
  }
}


/* HOME */

function home() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* OFFER TIMER */

let offerSeconds = 207;

setInterval(() => {
  offerSeconds--;

  if (offerSeconds < 0) {
    offerSeconds = 207;
  }

  const minutes = Math.floor(offerSeconds / 60);
  const seconds = offerSeconds % 60;

  const timer = document.getElementById("offerTimer");

  if (timer) {
    timer.innerText =
      "0" + minutes + ":" + String(seconds).padStart(2, "0");
  }
}, 1000);


/* HOT VIDEO TIMER */

let hotSeconds = 18;

setInterval(() => {
  hotSeconds--;

  if (hotSeconds < 0) {
    hotSeconds = 18;
  }

  const timer = document.getElementById("hotTimer");

  if (timer) {
    timer.innerText =
      "00:" + String(hotSeconds).padStart(2, "0");
  }
}, 1000);


/* AUTOMATIC POPUPS */

setTimeout(() => {
  showPopup(
    "💬 New message — Someone is waiting for a video call"
  );
}, 8000);

setTimeout(() => {
  showPopup(
    "🔥 Trending — New models are online now"
  );
}, 18000);

setTimeout(() => {
  showPopup(
    "🎁 Limited offer — Video call slots available"
  );
}, 30000);

setTimeout(() => {
  showPopup(
    "📲 Install VIDEO CALL app to continue"
  );
}, 45000);
