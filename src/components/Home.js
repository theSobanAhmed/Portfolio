import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: helvetica;
  color: red;
  p {
    color: blue;
  }
  & :hover {
    background: grey;
  }
`;

function Home() {
  return (
    <div>
      <div className="App">
        <Title>
          Home
          <p>hello there</p>
        </Title>
      </div>
    </div>
  );
}

export default Home;
