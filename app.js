// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   btn.addEventListener("click", function () {
//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });

/* ALTERNATIVE */

const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", showRelativeText);
});

function showRelativeText(e) {
  const target = e.currentTarget.parentElement.parentElement;
  const questions = document.querySelectorAll(".question");
  target.classList.toggle("show-text");
  for (let question of questions) {
    if (target !== question) {
      question.classList.remove("show-text");
    }
  }
}
