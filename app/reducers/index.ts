
interface ComponentState {
    email: string;
    submitted: boolean;
  }
  
  // Define the action type
  type ComponentAction =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SUBMIT_SUCCESS' };
  
  // Define the initial state
  export const initialState: ComponentState = {
    email: '',
    submitted: false,
  };
  
  // Define the reducer function
  export function reducer(state: ComponentState, action: ComponentAction): ComponentState {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SUBMIT_SUCCESS':
        return { ...state, submitted: true, email: '' };
      default:
        return state;
    }
  }
  