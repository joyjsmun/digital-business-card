import styled from "styled-components";
//import photo from "../images/joy.png";


const Main = styled.div`
    width: 400px;
    height: 400px;
    

`

const Img = styled.img`

  
`

function Header() {
    return (
        <Main>
            <Img src={require('../images/joy.png')} />
        </Main>
    )
}

export default Header;