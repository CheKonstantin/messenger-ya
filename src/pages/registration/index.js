import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {reg} from './indexTmpl';

export const Reg = () => {
  return Handlebars.compile(
      reg
  )();
}

