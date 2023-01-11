import React from 'react'
import { useState, useEffect } from 'react'

function Header() {
    const [classes, setClasses] = useState('')
    useEffect(() => {
        return () => {
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 600) {
                    setClasses('header-active')
                } else if (window.pageYOffset <= 600) {
                    setClasses('')
                }
            })
        }
    }, [setClasses])

    return (
        <header className={classes}>
            <img src="/img/logo.svg" alt="logo"/>
            <a href="#form-todo"><button>New todo</button></a>
        </header>
    )
}

export default Header