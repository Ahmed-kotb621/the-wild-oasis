import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  background-color: #c6e2fa;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Row type="horizontal">
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in Check Out</Heading>
            <Button variations="primary" sizes="small">
              Check In
            </Button>
            <Button>Check Out</Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <div>
            <Input type="number" placeholder="Number on guests.." />
            <Input type="number" placeholder="Number on guests.." />
          </div>
        </Row>
      </div>
    </>
  );
}

export default App;
