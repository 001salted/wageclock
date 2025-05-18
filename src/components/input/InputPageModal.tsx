import styled from 'styled-components';

interface InputPageModalProps {
  text: string;
  onClose: (state: boolean) => void;
}

function InputPageModal({ text, onClose }: InputPageModalProps) {
  function onCloseButton() {
    onClose(false);
  }

  return (
    <Backdrop>
      <Modal>
        <SelectGroup>{text}</SelectGroup>
        <ButtonGroup>
          <button onClick={onCloseButton}>확인</button>
        </ButtonGroup>
      </Modal>
    </Backdrop>
  );
}

export default InputPageModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  button {
    border: none;
    border-radius: 10px;
    height: 50px;
    cursor: pointer;
    padding: 6px;
    width: 90%;
    font-size: 21px;
    font-family: 'Pretendard';
    letter-spacing: 0.1em;
    color: #1f4223;

    transition: background-color 0.2s;

    background-color: #a8e665;

    &:hover {
      background-color: #a8e665;
    }

    &:active {
      background-color: #b0d097;
    }
  }
`;
