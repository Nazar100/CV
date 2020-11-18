// const element = document.querySelector(".div");

const cont = document.querySelector(".main-container");
const texts = cont.querySelectorAll("p");
const timer = document.querySelector("#timer-1");
const images = cont.querySelectorAll("img");

const options = {
  threshold: 0.5,
};

const callbackText = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};
const observer = new IntersectionObserver(callbackText, options);

texts.forEach((text) => {
  observer.observe(text);
});

observer.observe(timer);

// next

const callbackPhoto = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("active");
      }, 2000);
    }
  });
};
const observerPhoto = new IntersectionObserver(callbackPhoto, options);

images.forEach((text) => {
  observerPhoto.observe(text);
});
