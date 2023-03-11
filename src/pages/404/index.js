import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';

import {error404} from './indexTmpl';

 export const Error404 = () => {
    return Handlebars.compile(
        error404
    )();
  }
