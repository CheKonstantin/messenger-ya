import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';

import {error500} from './indexTmpl';
export const Error500 = () => {
    return Handlebars.compile(
        error500
    )();
}
