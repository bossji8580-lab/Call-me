const defaults = {
  name: "Live Call",
  version: "1.0.0",
  description: "Connect quickly and enjoy a simple calling experience.",
  apk: "#",
  logo: ""
};

let settings = {};

try {
  settings = Object.assign(
    {},
    defaults,
    JSON.parse(localStorage.getItem("appSettings") || "{}")
  );
} catch (error) {
  settings = { ...defaults };
}

/* Basic page settings */

const appName = document.getElementById("appName");
const footerName = document.getElementById("footerName");
const appDescription = document.getElementById("appDescription");
const versionText = document.getElementById("versionText");
const year = document.getElementById("year");

if (appName) appName.textContent = settings.name;
if (footerName) footerName.textContent = settings.name;
if (appDescription) appDescription.textContent = settings.description;

if (versionText) {
  versionText.textContent = "Version " + settings.version;
}

if (year) {
  year.textContent = new Date().getFullYear();
}


/* APK links */

const downloadBtn = document.getElementById("downloadBtn");
const downloadBtn2 = document.getElementById("downloadBtn2");

function setDownloadLink(button) {
  if (!button) return;

  if (settings.apk && settings.apk !== "#") {
    button.href = settings.apk;
    button.setAttribute("download", "");
  } else {
    button.href = "#";
  }
}

setDownloadLink(downloadBtn);
setDownloadLink(downloadBtn2);


/* LIVE CALL */

const liveCallBtn = document.getElementById("liveCallBtn");
const callOverlay = document.getElementById("callOverlay");
const downloadOverlay = document.getElementById("downloadOverlay");
const callTimer = document.getElementById("callTimer");
const callingStatus = document.getElementById("callingStatus");
const closeDownload = document.getElementById("closeDownload");

let callRunning = false;

if (liveCallBtn) {
  liveCallBtn.addEventListener("click", function () {

    if (callRunning) return;

    callRunning = true;

    if (callOverlay) {
      callOverlay.classList.add("show");
    }

    let seconds = 3;

    if (callTimer) {
      callTimer.textContent = seconds;
    }

    if (callingStatus) {
      callingStatus.textContent = "Connecting...";
    }

    const timer = setInterval(function () {

      seconds--;

      if (callTimer) {
        callTimer.textContent = seconds;
      }

      if (seconds <= 0) {

        clearInterval(timer);

        if (callOverlay) {
          callOverlay.classList.remove("show");
        }

        if (downloadOverlay) {
          downloadOverlay.classList.add("show");
        }

        callRunning = false;
      }

    }, 1000);
  });
}


/* CLOSE DOWNLOAD POPUP */

if (closeDownload) {
  closeDownload.addEventListener("click", function () {

    if (downloadOverlay) {
      downloadOverlay.classList.remove("show");
    }

  });
}


/* Prevent empty APK link from jumping to the top */

if (downloadBtn) {
  downloadBtn.addEventListener("click", function (event) {

    if (!settings.apk || settings.apk === "#") {
      event.preventDefault();

      alert(
        "APK link abhi set nahi hai. Admin page se apna HTTPS APK link add karein."
      );
    }

  });
}
