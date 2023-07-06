"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useReducer,
  Reducer,
  ReducerState,
} from "react";

// type DataType = {
//   firstName: string;
// };

// interface ContextProps {
//   userId: string;
//   setUserId: Dispatch<SetStateAction<string>>;
//   data: DataType[];
//   setData: Dispatch<SetStateAction<DataType[]>>;
// }

type StateType = {
  origin: {
    [index: string]: [];
  };
  content: object;
  lang: string;
  images: [];
};

const initialState: ReducerState<any> = {
  origin: null,
  content: null,
  lang: "uz",
  images: [],
};

export const LangContext = createContext(initialState);

type ActionType = {
  type: string;
  payload: any;
};

const langChanger: Reducer<any, any> = (
  state: StateType,
  { type, payload }: ActionType
) => {
  switch (type) {
    case "CHANGE_LANG":
      return {
        ...state,
        content: state.origin[`${String(payload)}`],
        lang: payload,
      };
    case "GET_DATA":
      return {
        ...state,
        origin: payload,
        content: payload["uz"],
        images: payload["images"],
      };
    default:
      return state;
  }
};

function Context({ children }: any) {
  const [state, dispatch] = useReducer(langChanger, initialState);

  const getData = (data: any) => {
    dispatch({ type: "GET_DATA", payload: data });
  };
  const changeLang = (lang: string) => {
    dispatch({ type: "CHANGE_LANG", payload: lang });
  };
  return (
    <LangContext.Provider value={{ state, getData, changeLang }}>
      {children}
    </LangContext.Provider>
  );
}
export default Context;
