const adviceButton = document.querySelector('.adviceButton');
const adviceId = document.querySelector('.adviceId');
const advice = document.querySelector('.advice');

const getRandomAdvice = async () => {
  let result = await fetch('https://api.adviceslip.com/advice')
    .then((res) => {return res.json()})
    .then((jsonRes) => {return jsonRes.slip})
  adviceId.textContent = result.id;
  advice.textContent = result.advice;
}

