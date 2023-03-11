
import Handlebars from 'handlebars'
import input from 'bundle-text:./inputs.hbs';
import './style.scss';
export const Inputs = ({typeText, placeholderText, classText, nameText,valText}) => Handlebars.compile(input)({typeText, placeholderText, classText, nameText,valText});

const root = document.querySelector('#root');


root.innerHTML = `
    ${Inputs({typeText: '', placeholderText: '', classText: '', nameText: '', valText: ''})}

`