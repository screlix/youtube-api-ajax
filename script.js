var bb = document.querySelector("#ze");
var tt = document.querySelector("#zr");
var arti = document.querySelector("#ingo");
var fifo = document.querySelector("#fifo");
var kkey = "AIzaSyBiXCLb1HOMtnv3wgwD6h-yWjNvTlInaTE";
function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
// var cll = "1065439826555-n95jrl6untj25bbq9t7m2f4klq8n0dhi.apps.googleusercontent.com";
bb.addEventListener("click", function () {
  arti.querySelectorAll("*").forEach((element) => {
    element.remove();
  });
  fifo.querySelectorAll("*").forEach((element) => {
    element.remove();
  });
  console.log(tt.value);
  var foz = tt.value;
  var urll = `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${foz}&key=${kkey}`;
  fetch(urll)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      var ero = document.querySelectorAll(".ero");
      ero.forEach((el) => {
        el.style.display = "block";
      });

      var ull = document.createElement("ul");
      //AlishaMarie, the weeknd, joe biden
      fifo.appendChild(ull);
      var every = [
        res.items[0].snippet.channelTitle,
        res.items[0].snippet.description,
      ];
      var info = ["Channel Title", "Channel Description"];
      for (var i = 0; i < every.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = `<strong style="text-decoration:underline">${info[i]}</strong> : ${every[i]}`;
        ull.appendChild(li);
      }
      console.log(res);
      for (var i = 0; i < res.items.length; i++) {
        if (res.items[i].id.videoId == undefined) continue;
        var iff = document.createElement("iframe");
        setAttributes(iff, {
          src: `https://www.youtube.com/embed/${res.items[i].id.videoId}`,
        });
        arti.appendChild(iff);
      }
    });
  // .catch((err) => {
  //   console.log(err);
  // });
});
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the weeknd&key=AIzaSyBiXCLb1HOMtnv3wgwD6h-yWjNvTlInaTE&statistics
// subscribers / views/ visit channel button/
var nav = document.querySelector("nav ul").childNodes;
var api = nav[1];
var github = nav[2];
document.onclick = function (ev) {
  if (ev.target.innerHTML == "API")
    window.location = "https://developers.google.com/youtube/v3";
  else if (ev.target.innerHTML == "GITHUB")
    window.location = "https://github.com/screlix";
};
