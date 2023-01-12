import React, { createContext, useState } from 'react'
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

const Cookie = createContext();

const CookieContext = ({ children }) => {
    const [arrayOfTodos, setArrayOfTodos] = useState(cookies.get('arrayOfTodos') || []);
    return (
        <Cookie.Provider value={{ arrayOfTodos, setArrayOfTodos }}>
            {children}
        </Cookie.Provider>
    )
}

export const CookieState = () => {
    return React.useContext(Cookie)
}

export default CookieContext