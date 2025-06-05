const meanings = document.querySelectorAll(".meaning");
  const inputs = document.querySelectorAll(".user-input");
  let current = 0;

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      if (current < meanings.length) {
        meanings[current].classList.remove("hidden-meaning");
        meanings[current].classList.add("visible-meaning");
        current++;
      }
    }
  });

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        meanings[index].classList.remove("hidden-meaning");
        meanings[index].classList.add("visible-meaning");
        if (index + 1 < inputs.length) {
          inputs[index + 1].focus();
        }
      }
    });
  });


  
   // Store all meaning <td> elements at the start
  const allMeanings = document.querySelectorAll('#phrase-table .meaning');
  let currentIndex = 0;

  function showNextMeaning() {
    if (currentIndex < allMeanings.length) {
      allMeanings[currentIndex].classList.remove('hidden-meaning');
      allMeanings[currentIndex].classList.add('visible');
      currentIndex++;
    }
  }