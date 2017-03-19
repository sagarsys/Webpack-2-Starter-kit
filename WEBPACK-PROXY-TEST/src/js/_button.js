const Button = {
  button: '<button id="myButton">Click me here</button>',
  attachEl: () => {
    document.getElementById('myButton').addEventListener('click', () => {
      console.log('Clicked');
    });
  }
};

export default Button;