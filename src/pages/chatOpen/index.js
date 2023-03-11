import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {chatOpen} from './indexTmpl';

export const ChatOpen = () => {
  return Handlebars.compile(
    chatOpen
  )();
}