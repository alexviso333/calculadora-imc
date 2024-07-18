// script.js
document.getElementById('imcForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const imc = (weight / (height * height)).toFixed(2);
  let classification = '';
  let angle = 0;

  if (imc < 18.5) {
    classification = 'Bajo peso';
    angle = -45;
  } else if (imc >= 18.5 && imc < 24.9) {
    classification = 'Peso normal';
    angle = -15;
  } else if (imc >= 25 && imc < 29.9) {
    classification = 'Sobrepeso';
    angle = 15;
  } else {
    classification = 'Obesidad';
    angle = 45;
  }

  document.getElementById('needle').style.transform = `rotate(${angle}deg)`;
  document.getElementById('result').textContent = `Tu IMC es ${imc} (${classification})`;
});
