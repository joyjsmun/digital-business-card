import styled from "styled-components";

const Wrapper = styled.div`
    height: 64px;
    background: #161619;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    display: flex;
    padding: 19.5px 72.5px;
    align-items: center;
    justify-content: center;
`

const Icon = styled.div`
    width: 25px;
    height: 25px;
    margin-right:23px;
    &:last-child{
        margin-right: 0;
    }
    border-radius: 2px;
    `

const LinkedinIcon = styled.img`
width: 25px;
margin-right: 3px;

`

function Footer() {
    return (
        <Wrapper>
                <Icon><LinkedinIcon src={require('../images/twitter-sign.png')} /></Icon>
                <Icon><LinkedinIcon src={require('../images/github.png')} /></Icon>
                <Icon><LinkedinIcon src={require('../images/linkedin-logo.png')} /></Icon>

        </Wrapper>
    )
}

export default Footer;