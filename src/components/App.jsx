import styled from 'styled-components';
import {
  Checkbox,
  CheckboxCompleted,
  CheckboxDiscard,
  EditSVG,
} from '../utils/Svg';
import { useTodos } from '../context/TodosContext';

import Modal from './Modal';
function App() {
  const { showModal, setShowModal, todos, deleteTodo, updateTodo, setTodo } =
    useTodos();

  return (
    <Wrapper>
      <Modal />
      <Main>
        <Header>
          <Title>TO-DO</Title>
          <ButtonAdd
            onClick={() =>
              setShowModal({ value: !showModal.value, type: 'add' })
            }
          >
            Añade una tarea!
          </ButtonAdd>
        </Header>
        <WrapperTodos>
          {todos?.map(({ _id, task, completed }) => (
            <Todo key={_id}>
              <Button
                onClick={() => {
                  updateTodo(_id, { task, completed: !completed });
                }}
              >
                {completed ? <CheckboxCompleted /> : <Checkbox />}
              </Button>
              <Task>{task}</Task>
              <Button
                onClick={() => {
                  setTodo({ id: _id, completed });
                  setShowModal({ value: !showModal.value, type: 'edit' });
                }}
              >
                <EditSVG />
              </Button>
              <Button onClick={() => deleteTodo(_id)}>
                <StyledCheckboxDiscard />
              </Button>
            </Todo>
          ))}
        </WrapperTodos>
      </Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background: ${(props) => props.theme.PEACH_DARK};
`;

const Main = styled.main`
  max-width: 500px;
  /* width: 33%; */
  min-width: 280px;
  min-height: 70%;
  background: ${(props) => props.theme.YELLOW_LIGHT};
  border-radius: 24px;
  box-shadow: 12px 12px 0px ${(props) => props.theme.eBROWN_DARK};
  border: 4px solid ${(props) => props.theme.BLACK};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  padding: 1rem;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  color: ${(props) => props.theme.BLACK}; ;
`;

const ButtonAdd = styled.button`
  background: none;
  border-radius: 24px;
  box-shadow: 5px 5px 0px ${(props) => props.theme.eBROWN_DARK};
  border: 4px solid ${(props) => props.theme.BLACK};
  padding: 0.5rem;
  cursor: pointer;
`;

const WrapperTodos = styled.section`
  padding: 1rem;
`;

const Todo = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const Task = styled.p`
  padding: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.YELLOW_LIGHT};
`;

const StyledCheckboxDiscard = styled(CheckboxDiscard)`
  align-self: flex-end;
`;
