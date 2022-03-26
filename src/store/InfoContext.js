import React, { useReducer } from "react";
import { createContext } from "react";

export const InfoContext = createContext({
    info: '',
    tokenLogin: null,
    onChangeInfo: () => { },
    onMakeLogin: () => { },
    onMakeLogout: () => { },
})

const InfoReducer = (state, action) => {
    let newState = { ...state };
    if (action.type === 'CHANGE_INFO') {
        newState.info = action.val;
        newState.hasChanged = 1;
    } else if (action.type === 'MAKE_LOGIN') {
        localStorage.setItem("tokenLogin", action.val);
        newState.tokenLogin = action.val;
    } else if (action.type === 'MAKE_LOGOUT') {
        localStorage.removeItem("tokenLogin");
        newState.tokenLogin = null;
    }
    return newState;
}

export const InfoContextProvider = (props) => {

    const [infoState, dispatch] = useReducer(InfoReducer, {
        info: 'Teste',
        tokenLogin: null,
        hasChanged: 0,
    });

    const onSetNewInfo = (info) => {
        dispatch({ type: 'CHANGE_INFO', val: info })
    }

    const onMakeLogin = (info) => {
        dispatch({ type: 'MAKE_LOGIN', val: info })
    }

    const onMakeLogout = () => {
        dispatch({ type: 'MAKE_LOGOUT' })
    }

    return <InfoContext.Provider value={{
        info: infoState.info,
        hasChanged: infoState.hasChanged,
        tokenLogin: infoState.tokenLogin,
        onChangeInfo: onSetNewInfo,
        onMakeLogin: onMakeLogin,
        onMakeLogout: onMakeLogout,
    }}>
        {props.children}
    </InfoContext.Provider>
}