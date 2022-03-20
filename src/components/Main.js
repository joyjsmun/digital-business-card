import styled from "styled-components";

const MainSection = styled.div`
display: flex;
flex-direction: column;
width: 317px;
height: 400px;
`

const Name = styled.h1`

`

const Title = styled.h3``

const Field = styled.h5``

const Buttons = styled.ul``

const Email = styled.li``

const Linkedin = styled.li``

const About = styled.div``

const AboutTitle = styled.h3``

const Interest = styled.div``

const InterestTitle = styled.h3``


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
                <p>I am a software engineer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </About>
            <Interest>
                <InterestTitle>Interests</InterestTitle>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </Interest>
        </MainSection>
    )
}

export default Main;