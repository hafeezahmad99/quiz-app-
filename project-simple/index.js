const form = document.querySelector("form");
const resultBox = document.querySelector(".result-box");
const resultPercentageBox = document.querySelector(".result-percentage");
let totalNumberOfQuestions = document.querySelectorAll(".question-text").length;
const correctAnswers = ["A", "B", "B", "B", "A"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // initally when form is submitted, assume that no of correct answers is zero.
  let correctAnswersCount = 0;

  // need counter for animating percentage values
  let counter = 0;

  // create array of user answers when form is submitted.
  const userAnswers = [
    form.question1Option.value,
    form.question2Option.value,
    form.question3Option.value,
    form.question4Option.value,
    form.question5Option.value,
  ];

  // check if any user answer is correct, so increment "correctAnswersCount" variable by one.
  userAnswers.forEach(function (element, index) {
    if (element === correctAnswers[index]) {
      correctAnswersCount++;
    }
  });

  // Now calculate the percentage.
  let resultPercentage = (correctAnswersCount / totalNumberOfQuestions) * 100;

  // scroll to top of the window
  window.scrollTo(0, 0);

  // display the reult box on the dom.
  resultBox.classList.remove("d-none");

  // increase percentage value by one after every 20 milli seconds until it reaches the result percentage
  let timer = setInterval(() => {
    if (counter == resultPercentage) clearInterval(timer);
    else {
      counter++;
      resultPercentageBox.innerText = counter.toString();
    }
  }, 20);

  // Now clear the slected answers (radio buttons)
  document.querySelectorAll("input").forEach(function (element) {
    if (element.checked) element.checked = false;
    // if user again click any radio button so reset result percentage and hide result box
    element.addEventListener("change", function () {
      resultPercentageBox.innerText = "0";
      resultBox.classList.add("d-none");
    });
  });
});
