import React from 'react'
import styled from 'styled-components'
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { FiSmartphone, FiMapPin } from "react-icons/fi";
import { small, medium } from '../mobileResponsive';
const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 8rem;
`
const IconDiv = styled.div`
color: grey;
font-size: 3.5rem;
`
const IconHeader = styled.div`
font-size: 1.3rem;
font-weight: 600;
letter-spacing:0.5px;
`
const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
rowgap:0.5rem;

`
const InnerContainer = styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
${medium({ display: "block" })}
`



const ContactContainer = styled.div`
margin-top: 1rem;
display: flex;
flex-wrap: wrap;
flex-direction:column;
align-content:center;
gap: 1rem;

`
const Button = styled.button`
width:20rem;
background-color:#4b7bec;
color:white;
text-align:left;
letter-spacing:0.5px;


${small({ width: "20rem" })}
`
export default function Contact() {
    return (
        <div id="contacts">
            <HeaderContainer>
                <IconDiv><AiOutlineContacts /></IconDiv>
                <IconHeader>Connect professionally</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>

                    <ContactContainer>
                        <div ><Button className="btn  p-3"><AiOutlineMail /><a style={{ color: "inherit", textDecoration: "none" }} href="mailto:rdhamodharan22@gmail.com">rdhamodharan22@gmail.com</a></Button></div>
                        <div ><Button className="btn  p-3"><FiSmartphone /><a style={{ color: "inherit", textDecoration: "none" }} href="tel:+917548825259">+91-7548825259</a></Button></div>
                        <div ><Button className="btn  p-3"><FiMapPin />Triupur,Tamilnadu</Button></div>
                    </ContactContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}