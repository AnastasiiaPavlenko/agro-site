import './sass/main.scss';
import './scripts/form-submission-handler';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const notyf = new Notyf();
AOS.init(); 

const refs = {
    submit: document.querySelector('.form'),
};

console.log(refs.submit);
const notification = () => {
  console.log(notyf.success('Ваше повідомлення успішно відправлено! Дякуємо!'));  
};

refs.submit.addEventListener("submit", notification);