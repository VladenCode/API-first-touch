const imageDiv = document.querySelector('.image');

document.querySelector('button').addEventListener('click', getRandomFeed);

document.querySelector('input').addEventListener('click', removeElements);

function removeElements() {
  imageDiv.innerHTML = '';
}

function getRandomFeed() {
  let input = document.querySelector('input').value;
  input = input.replace(' ', '%20');

  fetch(
    `https://api.unsplash.com/search/photos?query=${input}&client_id=Ddkzf5_mpNRrDqQ3B6TOFwep34wjBM7iZf4GD8NXT70`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < 8; i++) {
        /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
        // if (data.results[i].id == 'Oja2ty_9ZLM') {
        let imageElement = document.createElement('img');
        imageElement.src = data.results[i].urls.thumb;
        imageDiv.append(imageElement);
        // }
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}
