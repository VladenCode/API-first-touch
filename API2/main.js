document.querySelector('button').addEventListener('click', generateQuote);

function generateQuote() {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json())
    .then((response) => {
      document.querySelector('.joke').innerHTML = response.value;
    })
    .catch((err) => console.error(err));
}
