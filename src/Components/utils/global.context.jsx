import axios from "axios";
import { createContext, useMemo, useReducer } from "react";

export const initialState = {theme: "light", dentists: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "theme":
                return {...state, theme: action.theme === "dark" ? "light" : "dark"}
            case "dentists":
                return {...state, dentists: action.dentists}
            default:
                return state;
        }
        
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState)


    useMemo(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {
            // console.log(respuesta)
            dispatch({type: "dentists", dentists: respuesta.data})
        })
        .catch(err => {
            console.log("Promesa rechazada: ")
            console.log(err)
        })
    }, [])

  return (
    <ContextGlobal.Provider value={{datos: state, datosDispatch: dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
