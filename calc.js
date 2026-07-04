
  const display = document.querySelector(".display p");
  const buttons = document.querySelectorAll(".buttons button");

  let currentInput = "";

  function isOperator(char) {
    return ["+", "-", "×", "÷", "%", "^"].includes(char);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.textContent;

      if (button.classList.contains("clear")) {
        currentInput = "";
        display.textContent = "0";
      } else if (button.classList.contains("backspace")) {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || "0";
      } else if (button.classList.contains("equal")) {
        try {
          let expression = currentInput
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/\^/g, "**");

          currentInput = eval(expression).toString();
          display.textContent = currentInput;
        } catch {
          display.textContent = "Error";
          currentInput = "";
        }
      } else {
    
        if (isOperator(value) && isOperator(currentInput.slice(-1))) {
          
          currentInput = currentInput.slice(0, -1) + value;
        } else {
          currentInput += value;
        }
        display.textContent = currentInput;
      }
    });
  });

