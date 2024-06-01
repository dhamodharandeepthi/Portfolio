import React from 'react'
import styled, { keyframes } from 'styled-components'
import Wave from 'react-wavify'
import TextTransition, { presets } from "react-text-transition";
import { HiDocumentDownload } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import Resume from "../assets/Dhamodharan R.pdf"
import { Link as LinkS } from 'react-scroll'
import { small } from '../mobileResponsive';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 9rem;
${small({ gap: "2rem" })}
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;

`

const MainDiv = styled.div`
flex: 1;
margin-bottom:-80px;
`

const Container = styled.div`
display: flex;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:9rem;
text-align: center;
${small({ marginTop: "5rem" })}
`
const dhamu = keyframes`
 0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`
const HeaderContainer = styled.div`
font-size: 3.5rem;
font-weight: 700;
text-align: center;
background: linear-gradient(
    158deg,
    rgba(23, 104, 226, 0.879) 32%,
    rgb(33, 66, 118) 45%,
    rgba(5, 106, 185, 1) 57%,
    rgba(0, 212, 255, 1) 68%
  );
  color: transparent;
  background-clip: text;
  background-size: 500% 500%;
  animation: ${dhamu} 3s ease infinite;

`
const typing = keyframes`
from {
    width: 0;
  }
`
const blink = keyframes`
 50% {  
    border-color: transparent;
  }
`
const SContainer = styled.div`
font-size: 2.0rem;
font-weight: 700;
color:#4b7bec;
 
`
const SContainer1 = styled.div`
font-size: 2.0rem;
font-weight: 700;
color:#4b7bec;
margin-bottom:5px;
letter-spacing:0.5px;
border-right: 3px solid;
  width: 19ch;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typing} 3s steps(19), ${blink} 0.5s step-end infinite alternate;
`
const SContainer2 = styled.div`
font-size: 1.18rem;
text-align:left;
width:46%;
padding-left:100px;
line-height:2rem;
letter-spacing:1px;
margin-top:50px;
color:#4b7bec;
font-weight:700;

`
const TContainer = styled.div`
font-size: 1.5rem;
font-weight: 700;
color:#4b7bec;
letter-spacing:0.5px;
`





export default function Home() {
    const [index, setIndex] = React.useState(0);
    const TEXTS = [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "NodeJs",
        "MongoDB",
        "Express",
    ];

    React.useEffect(() => {

        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            1500
        );
        return () => clearTimeout(intervalId);

    }, []);
    return (
        <div id="home">
            <MainContainer>

                <MainDiv>
                    <Container className="text-justify" >
                        <HeaderContainer> Dhamodharan R</HeaderContainer>
                        <SContainer1 className='typing'>MERN Stack Developer</SContainer1>
                        <TContainer>
                            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </TContainer>
                        <SContainer>
                            <button className="btn btn-success"><a style={{ color: "inherit", textDecoration: "none" }} href={Resume} target='_blank'><HiDocumentDownload style={{ fontSize: "1.5rem" }} />Resume</a></button>

                            <button className="btn btn-secondary mx-2"> <AiFillAppstore style={{ fontSize: "1.5rem" }} />
                                <NavLinks to='projects' spy={true} smooth={true} duration={500} style={{ color: "inherit", textDecoration: "none" }}
                                >Projects</NavLinks>
                            </button>

                        </SContainer>
                        <SContainer2>
                            As a Fresh MERN graduate, I'm driven by front-end finesse and back-end brilliance, crafting immersive digital experiences with clean, efficient code. Join me in a journey of innovation and creativity!
                        </SContainer2>
                    </Container>
                </MainDiv >

                <MainDiv className="d-flex flex-column justify-content-end " >
                    <div>
                        <Wave fill='#4b7bec'
                            paused={false}
                            options={{
                                height: 20,
                                amplitude: 20,
                                speed: 0.50,
                                points: 3
                            }}
                        />
                    </div>
                </MainDiv>
            </MainContainer>
        </div>
    )
}