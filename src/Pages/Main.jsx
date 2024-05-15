import React, { useContext } from 'react'
import { ThemeContainer } from '../theme'
import { ThemeContext } from '../myContext'
import TopNavbar from '../Sections/NavBar'
import Home from '../Sections/Home'
import Projects from '../Sections/Projects'
import Skills from '../Sections/Skills'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'

export default function Main() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <ThemeContainer theme={theme}>
                <TopNavbar />
                <Home />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </ThemeContainer>
        </div>
    )
}