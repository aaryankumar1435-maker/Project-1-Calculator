let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.textContent;

    if (value === '=') {
      try {
        string = eval(string).toString();
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }

    else if (value === 'C') {
      string = "";
      input.value = "";
    }

    else if (value === 'X') {
      string += '*';
      input.value = string;
    }

    else {
      string += value;
      input.value = string;
    }
  });
});
