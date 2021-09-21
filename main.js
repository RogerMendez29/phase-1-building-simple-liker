// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const heartButtons = document.querySelectorAll(".like-glyph");

for (const heart of heartButtons) {
  heart.addEventListener("click", handleClick);
}

function changeHeart(heart) {
  if (heart.innerHTML === FULL_HEART) {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  } else {
    heart.innerHTML = FULL_HEART;
    heart.setAttribute("class", "activated-heart");
  }
}
function toggleModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("hidden");
  setTimeout(function () {
    modal.classList.add("hidden");
  }, 3000);
}

function handleClick(e) {
  mimicServerCall()
    .then((resp) => {
      changeHeart(e.target);
    })
    .catch(() => {
      toggleModal();
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
