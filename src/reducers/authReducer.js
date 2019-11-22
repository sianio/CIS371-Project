import { createStore } from 'redux';


let initState = {
  userName: "",
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
    default:
      break;
  }
  return currentState;
};

const AuthStore = createStore(authReducer);
export default AuthStore;
