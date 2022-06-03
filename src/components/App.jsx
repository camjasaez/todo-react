import styled from 'styled-components';
import * as palettes from '../utils/Variables';

function App() {
  return (
    <Wrapper>
      <Main>
        <Title>TO-DO</Title>
      </Main>
    </Wrapper>
  );
}

export default App;

const Title = styled.h1`
  padding: 1rem;
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 3em;
  background: ${palettes.YELLOW_DARK};
`;

const Main = styled.main`
  min-width: 25rem;
  min-height: 25rem;

  background: ${palettes.YELLOW_LIGHT};
  border-radius: 24px;
  box-shadow: 12px 12px 0px ${palettes.BROWN_DARK};
  border: 4px solid ${palettes.BROWN_DARK};
`;
