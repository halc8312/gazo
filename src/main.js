const rollButton = document.getElementById('roll-button');
    const resultDisplay = document.getElementById('result');

    rollButton.addEventListener('click', () => {
      const result = Math.floor(Math.random() * 6) + 1;
      resultDisplay.textContent = `出た目: ${result}`;
    });
