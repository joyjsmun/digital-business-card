import styled from "styled-components";

const Wrapper = styled.div`
    height: 64px;
    background: #161619;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
`

const List = styled.ul`
    display: flex;
    
`

const Icon = styled.li``

function Footer() {
    return (
        <Wrapper>
            <List>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
            </List>
        </Wrapper>
    )
}

export default Footer;