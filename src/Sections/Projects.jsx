
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BiCodeAlt } from "react-icons/bi";
import { medium, small, large } from '../mobileResponsive';
import WeatherApp from "../assets/weather.png"
import CalenderApp from "../assets/calender.png"
import CurrencyApp from "../assets/currency.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 2rem;
${large({ marginTop: "9rem" })}
${medium({ marginTop: "12rem" })}
${small({ marginTop: "15rem" })}
`
const IconDiv = styled.div`
color: grey;
font-size: 3.5rem;
margin-top:4rem;
`
const IconHeader = styled.div`
font-size: 1.8rem;
font-weight: 700;
letter-spacing:0.5px
`
const Container = styled.div`
display: flex;
justify-content: center;

`
const InnerContainer = styled.div`
width: 100%;
padding: 10px;
margin: 1rem;
`

const CardContainer = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`
const OuterCard = styled.div`
`
const InnerCard = styled.div`

`
const CardDetails = styled.div`
position: absolute;
display: none !important;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.8);
height: 100%;
width: 100%;
color: white;
text-align: center;
padding: 7px;
gap: 1rem;
`
const Card = styled.div`
width: 20rem;
height: 20rem;
position: relative;
${small({ width: "25rem", padding: "10px" })}
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

&:hover ${CardDetails}{
 display: flex !important;
flex-direction: column;
justify-content: center;
align-items: center;

}
`
const CardImg = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`

const DetailHeader = styled.div`
font-size: 1.8rem;
font-weight: 700;
letter-spacing:0.5px;
`
const DetailSub = styled.div`
font-weight: 600;
font-size: 1rem;
color:#f5f5f5;
letter-spacing:0.5px;
`

const DetailBody = styled.div`
font-weight: 600;
font-size:1.2rem;
text-align:left;
padding:2px;
letter-spacing:0.5px;
`

const DetailFooter = styled.div`
display: flex;
gap: 0.9rem;
letter-spacing:0.5px;
`
export default function Projects() {

    useEffect(() => {
        AOS.init({})
    }, [])


    return (
        <div id="projects">
            <HeaderContainer>
                <IconDiv><BiCodeAlt /></IconDiv>
                <IconHeader>Crafted Apps</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <CardContainer>
                        <OuterCard >
                            <InnerCard>
                                <Card data-aos="zoom-out" >
                                    <CardImg src={WeatherApp} />
                                    <CardDetails>
                                        <DetailHeader>Weather App</DetailHeader>
                                        <DetailBody> Weather app with real-time updates and intuitive design.</DetailBody>
                                        <DetailSub> | React |</DetailSub>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://weather-proje-app.netlify.app/">Live Showcase</a></button></div>
                                            <div><button className="btn btn-success"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://github.com/dhamodharandeepthi/practice1/tree/main/REACT_JS/WeatherApp">Access Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={CalenderApp} />
                                    <CardDetails>
                                        <DetailHeader>Calender App</DetailHeader>
                                        <DetailBody> Calender app with real-time updates and intuitive design.</DetailBody>
                                        <DetailSub> | React |</DetailSub>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://mycalenderappusingreact.netlify.app/">Live Showcase</a></button></div>
                                            <div><button className="btn btn-success"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://github.com/dhamodharandeepthi/practice1/tree/main/REACT_JS/Calender_App">Access Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={CurrencyApp} />
                                    <CardDetails>
                                        <DetailHeader>Currency Converter </DetailHeader>
                                        <DetailBody>Reliable currency converter app!. Instant conversions, anytime, anywhere!</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://pro-currency-converter-app.netlify.app/">Live Showcase</a></button></div>
                                            <div><button className="btn btn-success"><a style={{ color: "inherit", textDecoration: "none" }} target="_blank" href="https://github.com/dhamodharandeepthi/practice1/tree/main/REACT_JS/Currency_converter">Access Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>









                    </CardContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}