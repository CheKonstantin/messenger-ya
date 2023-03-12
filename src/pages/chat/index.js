import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {chat} from './indexTmpl';

export const Chat = () => {
  return Handlebars.compile(
    chat
  )();
}