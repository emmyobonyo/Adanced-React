import React from "react"
import { ThemeContextConsumer } from "./themeContext"

function Header() {
    return (
        <ThemeContextConsumer>
            { theme => (
                <header className={`${theme}-theme`}>
                    <h2>Light Theme</h2>
                </header>
            ) }
        </ThemeContextConsumer>
    )    
}

export default Header
