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


/* PAGE SETTINGS */

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


/* APK BUTTONS */

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

    /* SHOW CALLING POPUP */

    if (downloadOverlay) {
      downloadOverlay.classList.remove("show");
    }

    if (callOverlay) {
      callOverlay.classList.add("show");
    }

    let seconds = 3;

    if (callTimer) {
      callTimer.textContent = seconds;
    }

    if (callingStatus) {
      callingStatus.textContent = "Calling...";
    }


    /* 3 SECOND COUNTDOWN */

    const countdown = setInterval(function () {

      seconds--;

      if (callTimer) {
        callTimer.textContent = seconds;
      }

      if (seconds <= 0) {

        clearInterval(countdown);

        /* CLOSE CALLING */

        if (callOverlay) {
          callOverlay.classList.remove("show");
        }

        /* SHOW DOWNLOAD */

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


/* APK NOT SET MESSAGE */

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
