

import Handlebars from 'handlebars';

import '../../styles/common.scss';
import './style.scss';
import {profile} from './indexTmpl';

export const Profile = () => {
  return Handlebars.compile(
    profile
  )();
}
