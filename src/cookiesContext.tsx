import React, { createContext, useState } from 'react'
import { Cookies } from 'react-cookie';
import { TodoType } from './types';

const cookies = new Cookies()

const Cookie: any = createContext(cookies);

const CookieContext = ({ children }: any) => {
    const [arrayOfTodos, setArrayOfTodos] = useState(cookies.get('arrayOfTodos') || []);
    function deleteTodos(id: any) {
        var filtered = arrayOfTodos.filter((todo: TodoType) => todo.id !== id);
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