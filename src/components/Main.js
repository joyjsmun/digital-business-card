import styled from "styled-components";

const Main = styled.div``

const Name = styled.h1``

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
        <Main>
            <Name></Name>
            <Title></Title>
            <Field></Field>
            <Buttons>
                <Email></Email>
                <Linkedin></Linkedin>
            </Buttons>
            <About>
                <AboutTitle></AboutTitle>
                <p></p>
            </About>
            <Interest>
                <InterestTitle></InterestTitle>
                <p></p>
            </Interest>
        </Main>
    )
}

export default Main;