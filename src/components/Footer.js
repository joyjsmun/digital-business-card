import styled from "styled-components";

const Wrapper = styled.div`
    height: 64px;
    background: #161619;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    display: flex;
    padding: 19.5px 72.5px;
`

const Icon = styled.div`
    width: 25px;
    height: 25px;
    background: #918E9B;
    margin-right:23px;
    &:last-child{
        margin-right: 0;
    }
`

function Footer() {
    return (
        <Wrapper>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
                <Icon></Icon>
        </Wrapper>
    )
}

export default Footer;