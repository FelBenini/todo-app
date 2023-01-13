import React, { createContext, useState } from 'react'
import { Cookies } from 'react-cookie';

const cookies = new Cookies()

const Cookie = createContext();

const CookieContext = ({ children }) => {
    const [arrayOfTodos, setArrayOfTodos] = useState(cookies.get('arrayOfTodos') || []);
    function deleteTodos(id) {
        var filtered = arrayOfTodos.filter((todo) => todo.id !== id);
        setArrayOfTodos(filtered);
        cookies.set('arrayOfTodos', filtered, { path: '/' });
    }
    return (
        <Cookie.Provider value={{ arrayOfTodos, setArrayOfTodos, deleteTodos }}>
            {children}
        </Cookie.Provider>
    )
}

export const CookieState = () => {
    return React.useContext(Cookie)
}

export default CookieContext