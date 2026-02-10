const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("videoContainer");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 400;
  const y = Math.random() * 150;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  video.style.display = "block";
  video.scrollIntoView({ behavior: "smooth" });
});

// floating hearts generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 400);