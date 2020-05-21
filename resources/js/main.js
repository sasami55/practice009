var age , height , weight , BMI;

var calBMI = function (height , weight) {
  BMI = weight * 10000 / (height * height) * 10;
  return BMI;
}

var calMHR = function (age) {
  MHR = 206.9 - (0.67 * age);
  return MHR;
}


document.querySelector('.check').addEventListener('click' , function() {

  // get input value
  age = document.querySelector('.age').value;
  height = document.querySelector('.height').value;
  weight = document.querySelector('.weight').value;

  var displayBMI = Math.round(calBMI(height , weight)) / 10;
  var value = document.querySelector('.value');

  // change UI
  document.querySelector('.calBMI').textContent = displayBMI;
  document.querySelector('.calMHR').textContent = Math.round( calMHR(age) );

  if (age === '') {
    document.querySelector('.calMHR').textContent = 'にゅうりょくしてね';
  }
  if (height === '') {
    document.querySelector('.calBMI').textContent = 'にゅうりょくしてね';
  }

  

  switch (true) {
    case displayBMI < 18.5:
      value.textContent = 'やせ';
      break;
    case displayBMI < 25:
      value.textContent = 'ひょうじゅん';
      break;
    case displayBMI < 30:
      value.textContent = 'ひまんぎみ';
      break;
    case displayBMI >= 30:
      value.textContent = 'ひまん';
      break;
  }

  document.querySelector('.bmi').style.display ='flex';
  document.querySelector('.mhr').style.display ='flex';

})
