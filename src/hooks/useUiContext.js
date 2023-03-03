import { useContext } from "react";
import { uiContext } from "../uiContext/uiContext";

const useUiContext = () => {
  return useContext(uiContext);
};

export default useUiContext;
