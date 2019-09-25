  let timeEl = document.querySelector(".time");
  let score = 0;
  let current = 0;
  let secondsLeft = 75;

   //Setting the timer
  function setTime() {
    let timerInterval = setInterval(function() {  
      secondsLeft--;
      timeEl.textContent = `${secondsLeft} seconds remaining`;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage('Times Up');
      }
      }, 1000);
  }

  $('#start').on('click', function() {
    setTime();
    $('.dissapear').hide();
    getQuestions()  
  })
  
  // Display the questions and choices to the quiz.
  function getQuestions() {
      let title = questions[current].title;
      let choices = questions[current].choices;
      $('#game').html(`<h4>${title}</h4>
      ${getChoices(choices)}
      `);
  }

  function getChoices(choices) {
      let result = '';
      for (let i = 0; i < choices.length; i++) {
          result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
      }

      return result;
  }

  //Go to next question when user input is entered.
  $(document).on('click', '.choice', function() {
      let selectedAnswer = $(this).attr('data-answer');
      let correctAnswer = questions[current].answer;

      if (correctAnswer === selectedAnswer) {
          score++;
          nextQuest();
      }
      else {
          nextQuest()
      }
  })

  function nextQuest() {
    let isGameOver = (questions.length - 1) === current;
    if (isGameOver) {
        displayResult();
    }
    
    else {
        current++;
        getQuestions();
    }
}

  function displayResult() {
      let result =
      `<p>Game Over!</p>
      <p>You got ${score} correct!</p>
      <button class='btn btn-primary' id='reset'>Reset Game</button>`;

      $('#game').html(result);
  }
  
  $(document).on('click', '#reset', function () {
    score = 0;
    current = 0;
    let secondsLeft = 75;

    getQuestions()
  })

  localStorage.setItem('score', score)

  