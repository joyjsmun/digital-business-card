import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`


function App() {
  return (
    <Wrapper>
    <Header />
    <Main />
    <Footer />
    </Wrapper>
  );
}

export default App;
