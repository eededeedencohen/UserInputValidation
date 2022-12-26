/*===========================================
Now I using useReducer instead of useState
 ===========================================*/
import { useReducer } from "react";

const initialInputState = {
  value: '',
  isTouched: false,
};

// Reducer
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {value: action.value, isTouched: state.isTouched};// same as {value: action.value, isTouched: isTouched}
  }

  if(action.type === 'BLUR') {
    return {isTouched: true, value: state.value};// same as {isTouched: true, value: value}
  }
  if(action.type === 'RESET') {
    return {value:'', isTouched:false};// same as {value:'', isTouched:false}
  }
  return initialInputState;
};


const useInput = (validateValue) => {
  const [inputState,dispatch] = useReducer(inputStateReducer, initialInputState);


  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  // const [enteredValue, setEnteredValue] = useState("");
  const valueChangeHandler = (event) => {
    dispatch({type:'INPUT', value:event.target.value});
  };

  // const [isTouched, setIsTouched] = useState(false);
  const inputBlurHandler = (event) => {
    dispatch({type:'BLUR'});
  };

  const reset = () => {
    dispatch({'TYPE':'RESET'})
  };

  return {
    value: inputState.value,
    hasError, // same as haeError: haeError
    isValid:valueIsValid,
    valueChangeHandler,  
    inputBlurHandler,
    reset
  };
};
export default useInput;
 
