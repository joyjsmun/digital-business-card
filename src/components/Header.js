import styled from "styled-components";
//import photo from "../images/joy.png";


const Main = styled.div`
    width: 400px;
    
    

`

const Img = styled.img`
    width: inherit;
    height: inherit;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
  
`

function Header() {
    return (
        <Main>
            <Img src={require('../images/joy.png')} />
        </Main>
    )
}

export default Header;