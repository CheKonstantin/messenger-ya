
import {Main} from './src/pages/main';
import {Error404} from './src/pages/404';
import {Error500} from './src/pages/500';
import {Auth} from './src/pages/autorization';
import {Reg} from './src/pages/registration';
import {Profile} from './src/pages/profile';
import {Chat} from './src/pages/chat';
import {ChatOpen} from './src/pages/chatOpen';
import {ChatOpenProfile} from './src/pages/chatOpenProfile';

export const App = () => {
  switch(window.location.pathname) {
    case '/main':
      return Main();
    case '/page-404':
      return Error404();
    case '/page-500':
      return Error500();
    case '/auth':
      return Auth();
    case '/reg':
      return Reg();
    case '/profile':
      return Profile();
    case '/chat':
      return Chat();
    case '/chat-open':
      return ChatOpen();
    case '/chat-open-profile':
      return ChatOpenProfile();
    default:
      return Main();
  }
}