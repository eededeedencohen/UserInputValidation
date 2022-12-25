/*===========================================
 this hook manage the value of the given input, 
 the touch state, infer its validity.
 ===========================================*/
import { useState } from "react";

const useInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
};
export default useInput;

