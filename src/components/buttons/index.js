
import Handlebars from 'handlebars'
import button from 'bundle-text:./buttons.hbs';
import './style.scss';
export const Button = ({text}) => Handlebars.compile(button)({text});

const root = document.querySelector('#root');


root.innerHTML = `
  <div>
    ${Button({text: 'opaaa'})}
  </div>

`