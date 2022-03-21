import styled from "styled-components";

const MainSection = styled.div`
display: flex;
flex-direction: column;
width: 317px;
height: 400px;
background: #23252C;
margin: none;
padding:21px 35px;
color: #F5F5F5;
`

const Name = styled.h1`
font-weight: 700;
font-size: 25px;
text-align: center;
color: #FFFFFF;
padding-bottom: 7px;
`

const Title = styled.h3`
color: #F3BF99;
font-weight: 400;
font-size: 12.8px;
text-align: center;
`

const Field = styled.h5`
color: #F5F5F5;
text-align: center;
font-weight: 400;
font-size: 10.24px;
padding-bottom: 15px;

`

const Buttons = styled.ul`
display: flex;
padding-bottom: 33px;
font-size: 14px;
text-align: center;
margin: 0 auto;
`

const Email = styled.div`
width: 115px;
height: 34px;
background: #FFFFFF;
color: #374151;
border-radius: 6px;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
margin-right: 17px;
`

const Linkedin = styled.div`
width: 115px;
height: 34px;
background: #5093E2;
color: #374151;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 6px;
font-weight: 500;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

const About = styled.div`
padding-bottom: 27px;

`

const AboutTitle = styled.h3`
font-weight: 700;
font-size: 16px;
`

const Interest = styled.div``

const InterestTitle = styled.h3`
font-weight: 700;
font-size: 16px;
`

const Desc = styled.p`
font-size: 10.24px;

`


function Main() {
    return (
        <MainSection>
            <Name>Joy Mun</Name>
            <Title>Software Engineer</Title>
            <Field>Web3 & Blockchain</Field>
            <Buttons>
                <Email>Email</Email>
                <Linkedin>Linkedin</Linkedin>
            </Buttons>
            <About>
                <AboutTitle>About</AboutTitle>
                <Desc>I am a software engineer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</Desc>
            </About>
            <Interest>
                <InterestTitle>Interests</InterestTitle>
                <Desc>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</Desc>
            </Interest>
        </MainSection>
    )
}

export default Main;