'use strict';

// Pobieramy element .logo
const logo = document.querySelector('.logo');

// PROMISE 1: rozwiązuje się po lewym kliknięciu w logo
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (event) => {
    if (event.button === 0) { // 0 = lewy przycisk myszy
      resolve('Promise was resolved!');
    }
  });
});

promise1.then((message) => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}).catch((error) => {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});

// PROMISE 2: odrzuca się automatycznie po 3 sekundach
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise2.then((message) => {
  const div = document.createElement('div');
  div.className = 'message';
  div.textContent = message;
  document.body.appendChild(div);
}).catch((error) => {
  const div = document.createElement('div');
  div.className = 'message error-message';
  div.textContent = error;
  document.body.appendChild(div);
});

