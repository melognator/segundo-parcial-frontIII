import { createContext, useMemo, useReducer } from "react";
import { addFavSuccess, removeFavSuccess } from '../Alerts/Alert'

export const initialState = {theme: "light", dentists: [], favDentists: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

    const handleFav = (dentist) => {
        let newFavDentists = state.favDentists
        if (newFavDentists.filter(d => d.id === dentist.id) < 1) {
            newFavDentists.push(dentist)
            addFavSuccess(dentist.name)
        } else {
            newFavDentists = newFavDentists.filter(d => d.id !== dentist.id)
            removeFavSuccess(dentist.name)
        }
        dispatch({type: "favDentists", favDentists: newFavDentists})
        localStorage.setItem("favs", JSON.stringify(newFavDentists));
    }

    const isFaved = (id) => {
        return state.favDentists.filter(dentist => dentist.id === id).length > 0
    }

    const reducerFunction = (state, action) => {
        switch (action.type) {
            case "theme":
                return {...state, theme: action.theme === "dark" ? "light" : "dark"}
            case "dentists":
                return {...state, dentists: action.dentists}
            case "favDentists":
                return {...state, favDentists: action.favDentists}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState)

    useMemo(() => {
        const favs = JSON.parse(localStorage.getItem("favs"))
        if (favs) {
            dispatch({type: "favDentists", favDentists: favs})
        }
    }, [])

  return (
    <ContextGlobal.Provider value={{datos: state, datosDispatch: dispatch, handleFav: handleFav, isFaved: isFaved}}>
      {children}
    </ContextGlobal.Provider>
  );
};
