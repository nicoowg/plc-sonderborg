document.querySelectorAll(".reveal").forEach(function (el, i) {
  el.style.transitionDelay = (i % 6) * 60 + "ms";
});
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

var search = document.getElementById("fag-search");
if (search) {
  search.addEventListener("input", function () {
    var q = this.value.trim().toLowerCase();
    document.querySelectorAll(".fag").forEach(function (f) {
      var hit = f.textContent.toLowerCase().indexOf(q) !== -1;
      f.classList.toggle("hidden", !hit);
    });
  });
}

document.querySelectorAll(".fag").forEach(function (f) {
  if (f.getAttribute("href") === "#") {
    f.href = "artikel.html?fag=" + encodeURIComponent(f.querySelector("b").textContent);
  }
});

var row = document.querySelector(".bookrow");
if (row) {
  row.querySelectorAll("span").forEach(function (s) {
    s.style.setProperty("--h", 28 + Math.floor(Math.random() * 36) + "px");
  });
}
