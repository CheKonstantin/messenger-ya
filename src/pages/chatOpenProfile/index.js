import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {chatOpenProfile} from './indexTmpl';

export const ChatOpenProfile = () => {
  return Handlebars.compile(
    chatOpenProfile
  )();
}