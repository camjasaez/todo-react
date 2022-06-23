import { useState } from 'react';
import styled from 'styled-components';
import { useTodos } from '../context/TodosContext';
import { CheckboxDiscard } from '../utils/Svg';

const Modal = () => {
  const [valuesInput, setValuesInput] = useState({
    task: '',
  });
  const { updateTodo, createTodo, showModal, setShowModal, todo } = useTodos();

  const handleChange = (evt) => {
    const { value, name } = evt.target;

    const newValue = {
      ...valuesInput,
      [name]: value,
    };
    setValuesInput(newValue);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (showModal.type === 'add') {
      createTodo(valuesInput);
    } else {
      updateTodo(todo.id, {
        task: valuesInput.task,
        completed: todo.completed,
      });
    }
    setShowModal({ value: !showModal.value, type: '' });
  };

  return (
    <ModalBackgound show={showModal.value}>
      <ModalContainer>
        <Button
          onClick={() => setShowModal({ value: !showModal.value, type: '' })}
        >
          <StyledCheckboxDiscard />
        </Button>
        <TitleModal>
          {showModal.type === 'add' ? 'Añade una tarea' : 'Edita la tarea'}
        </TitleModal>
        <form onSubmit={handleSubmit}>
          <InputModal
            type="text"
            name="task"
            onChange={handleChange}
            autoFocus
          />
          <ButtonModal type="submit">
            {showModal.type === 'add' ? 'Añadir' : 'Editar'}
          </ButtonModal>
        </form>
      </ModalContainer>
    </ModalBackgound>
  );
};

const ModalBackgound = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.BLACK_SHADOW}; ;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: auto;
  padding: 0.75rem;
  padding-bottom: 2rem;
  background: ${(props) => props.theme.YELLOW_LIGHT};
  border-radius: 24px;
  box-shadow: 12px 12px 0px ${(props) => props.theme.eBROWN_DARK};
  border: 4px solid ${(props) => props.theme.BLACK};
`;

const TitleModal = styled.h2`
  margin-bottom: 1rem;
`;

const InputModal = styled.input`
  outline: none;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.BLACK};
  box-shadow: 2px 2px 0px ${(props) => props.theme.eBROWN_DARK};
`;
const ButtonModal = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 2px 2px 0px ${(props) => props.theme.eBROWN_DARK};
  border: 4px solid ${(props) => props.theme.BLACK};
`;

const Button = styled.button`
  align-self: flex-end;
  border: none;
  background-color: ${(props) => props.theme.YELLOW_LIGHT};
`;

const StyledCheckboxDiscard = styled(CheckboxDiscard)`
  align-self: flex-end;
`;

export default Modal;
