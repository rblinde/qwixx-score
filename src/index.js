import App from './App';

const app = new App();
app.start();

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => app.start(), false);
