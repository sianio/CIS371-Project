import { createStore } from 'redux';


// eslint-disable-next-line prefer-const
let initState = {
  userName: '',
  uid: '',
  authenticated: false,
};

const authReducer = (currentState, action) => {
  // Is this right?
  let nextState = null;
  switch (action.type) {
    case 'changeUser':
      nextState = { ...currentState, userName: action.userName };
      return nextState;
    case 'changeAuth':
      nextState = { ...currentState, authenticated: action.authenticated };
      return nextState;
    case 'changeUId':
      nextState = { ...currentState, uid: action.uid };
      return nextState;
    default:
      break;
  }
  return currentState;
};

const AuthStore = createStore(authReducer);
export default AuthStore;
