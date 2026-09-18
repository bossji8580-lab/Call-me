const defaults = {
  name: "Your App",
  version: "1.0.0",
  description: "A simple, modern app experience. Download the Android app and get started.",
  apk: "#",
  logo: ""
};

const settings = Object.assign(
  {},
  defaults,
  JSON.parse(localStorage.getItem("appSettings") || "{}")
);

document.getElementById("appName").textContent = settings.name;
document.getElementById("footerName").textContent = settings.name;
document.getElementById("appDescription").textContent = settings.description;
document.getElementById("versionText").textContent =
  "Version " + settings.version;

["downloadBtn", "downloadBtn2"].forEach(id => {
  document.getElementById(id).href = settings.apk || "#";
});

document.getElementById("year").textContent = new Date().getFullYear();
