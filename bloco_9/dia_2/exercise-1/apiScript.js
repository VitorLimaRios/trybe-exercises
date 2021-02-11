const API_URL = 'https://icanhazdadjoke.com/';

const jokePlace = document.getElementById('jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokePlace.innerText = data.joke);
};

window.onload = () => {
  fetchJoke()
};