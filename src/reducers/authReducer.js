import { createStore } from "react-redux";

let initState = {
  userName: undefined,
  authenticated: false
};

const authReducer = (currentState, action) => {
  switch (action.type) {
    case "changeUser":
      const nextState = { ...currentState, userName: action.userName };
      return nextState;
    case 'changeAuth':
      const nextState = {...currentState, authenticated: action.authenticated};
      return nextState;
    default:
        break;
  }
  return currentState;
};

const AppStore = createStore(authReducer);
export default AppStore;
