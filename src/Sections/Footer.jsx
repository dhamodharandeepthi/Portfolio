import React from 'react'
import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Container = styled.div`
background-color:#1e272e;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
font-size: 1.3rem;
font-weight: 700;
gap: 0.5rem;
letter-spacing:0.5px;
`
const FooterBottom = styled.div`
display: flex;
gap: 1rem;
font-size: 1.7rem;
`
export default function Footer() {
    return (
        <div id="footer">
            <Container>
                <div>Dhamodharan R</div>
                <FooterBottom>
                    <div ><a style={{ color: "inherit", textDecoration: "none" }} href="https://github.com/dhamodharandeepthi/" target="_blank" rel="noreferrer"><AiFillGithub /></a></div>
                    <div ><a style={{ color: "inherit", textDecoration: "none" }} href="https://www.linkedin.com/in/dhamodharan-ramachandran-1536a3a3/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></div>

                </FooterBottom>
            </Container>
        </div>
    )
}