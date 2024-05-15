import React, { useEffect } from 'react'
import styled from 'styled-components'
import { medium, small } from '../mobileResponsive';
import { GiBullets } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;
letter-spacing:0.5px;
`
const IconDiv = styled.div`
color: grey;
font-size: 3.5rem;
margin-top: 6rem;
`
const IconHeader = styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container = styled.div`
display: flex;
justify-content: center;

`
const InnerContainer = styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;

${medium({ display: "block" })}
${small({ display: "block", width: "100%" })}
`
const LeftContainer = styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({ width: "100%" })}
${small({ width: "80%" })}

`
const RightContainer = styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({ width: "100%" })}
${small({ width: "80%" })}
`
const InputContainer = styled.div`
background-color:#4b7bec;
color: white;
padding: 7px;
font-weight: 500;
font-size: 1.3rem;
display: flex;
gap:1rem;
border-radius:0.5rem;
letter-spacing:0.5px;


`

export default function Skills() {

    let leftArray = ["HTML", "CSS", "Javascript", "Bootstrap"]
    let rightArray = ["ReactJs", "NodeJs", "MongoDB & MySQL", "Git & GitHub"]

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div id="skills">
            <HeaderContainer>
                <IconDiv><GiBullets /></IconDiv>
                <IconHeader>Proficiencies & Technologies</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <LeftContainer data-aos="fade-down-right" data-aos-offset="100">

                        {
                            leftArray.map((skill, index) => {
                                return (
                                    <div key={index}>
                                        <InputContainer>
                                            <div><FcApproval style={{ fontSize: "1.5rem" }} /></div>
                                            <div>{skill}</div>
                                        </InputContainer>
                                    </div>
                                )
                            })
                        }

                    </LeftContainer>
                    <RightContainer data-aos="fade-down-left" data-aos-offset="100" >
                        {
                            rightArray.map((skill, index) => {
                                return (
                                    <div key={index}>
                                        <InputContainer>
                                            <div><FcApproval style={{ fontSize: "1.5rem" }} /></div>
                                            <div>{skill}</div>
                                        </InputContainer>

                                    </div>

                                )
                            })
                        }
                    </RightContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}