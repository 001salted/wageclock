import { useState, useEffect } from "react";
import styled from 'styled-components';

export type TimeValue = {
  hour: string;
  minute: string;
  period: '오전' | '오후';
};

interface TimePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (time: TimeValue) => void;
  initialValue?: TimeValue;
}

const TimePickerModal = ({
  isOpen,
  onConfirm,
  initialValue = { hour: '09', minute: '00', period: '오전'},
}: TimePickerModalProps) => {
  const [time, setTime] = useState<TimeValue>(initialValue);

  useEffect(() => {
    setTime(initialValue);
  }, [initialValue, isOpen]);

  if (!isOpen) return null;

  return (
    <Backdrop>
      <Modal>
        <SelectGroup>
          <select
              value={time.period}
              onChange={(e) =>
                setTime({ ...time, period: e.target.value as '오전' | '오후' })
              }
            >
              <option value="오전">오전</option>
              <option value="오후">오후</option>
          </select>
          <select
            value={time.hour}
            onChange={(e) => setTime({ ...time, hour: e.target.value })}
          >
            {Array.from({ length: 12 }, (_, i) => {
              const h = String(i + 1).padStart(2, '0');
              return <option key={h}>{h}</option>;
            })}
          </select>
          <span>시</span>

          <select
            value={time.minute}
            onChange={(e) => setTime({ ...time, minute: e.target.value })}
          >
            {Array.from({ length: 60 }, (_, i) => {
              const m = String(i).padStart(2, '0');
              return <option key={m}>{m}</option>;
            })}
          </select>
          <span>분</span>


        </SelectGroup>

        <ButtonGroup>
          <button onClick={() => onConfirm(time)}>확인</button>
        </ButtonGroup>
      </Modal>

    </Backdrop>
  );
};

export default TimePickerModal;




const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  select {
    font-size: 32px;
    padding: 8px 12px;
    height: 120px;
    width: 80px;
    font-family: 'Pretendard';
    border: none;
    background: transparent;
    text-align-last: center;

    /* iOS 휠 느낌 주기 */
    overflow-y: scroll;
    -webkit-appearance: none;
    scroll-behavior: smooth;
  }

  select::-webkit-scrollbar {
    display: none;
  }

  select:nth-child(1) {
    width: 100px; 
  }

  /* Chrome, Edge, Safari에서만 먹힘 */
  select, option {
    text-align: center;
  }

  select: focus {
    outline: none;
    box-shadow: none;
  }

  span {
    font-size: 28px;
    color: #333;
  }
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
    color: #1F4223;

    transition: background-color 0.2s;

    background-color: #A8E665;

    &:hover {
      background-color: #A8E665;
    }

    &:active {
      background-color: #B0D097;
    }
  }
`;

