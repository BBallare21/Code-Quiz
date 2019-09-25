  let timeEl = document.querySelector(".time");
  
  function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = `${secondsLeft} seconds remaining`;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage('Times Up');
      }
  
    }, 1000);
  }
  setTime();

  let quest = 

  $('#start').on('click', function() {
    secondsLeft = 75;
    $('.dissapear').hide();

  })
  