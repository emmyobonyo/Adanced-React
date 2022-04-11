import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Header() {
    return (
        <ThemeContextConsumer>
            { context => (
                <header className={`${context.theme}-theme`}>
                    <h2>Light Theme</h2>
                </header>
            ) }
        </ThemeContextConsumer>
    )    
}

export default Header
