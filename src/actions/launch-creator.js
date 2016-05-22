
import Kefir from 'kefir';
import actions from './index';
import { registerIntent, payload  } from '../utils/index';

export default  {
  launchCreator: function(event) {
      registerIntent(
        actions.LAUNCH_CREATOR, 
        payload(event))
  }
} 