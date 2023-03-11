import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {auth} from './indexTmpl';

 export const Auth = () => {
     return Handlebars.compile(
         auth
     )();
 }




