import React from 'react'
import { useState, useEffect } from 'react'

function Header() {
    const [classes, setClasses] = useState('')
    useEffect(() => {
        return () => {
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 700) {
                    setClasses('header-active')
                } else if (window.pageYOffset <= 700) {
                    setClasses('')
                }
            })
        }
    }, [setClasses])
    function handleNavigation() {
        window.scrollTo(0, 0)
    }

    return (
        <header className={classes}>
            <img src="/img/logo.svg" alt="logo"/>
            <button onClick={handleNavigation}>New todo</button>
        </header>
    )
}

export default Header