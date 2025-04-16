import { useState } from "react";
import WorkTimeInput from "../components/WorkTimeInput";
import TimePickerModal, { TimeValue } from "../components/TimePickerModal";
import styled from "styled-components";
import WorkdaysButton from "../components/WorkdaysButton";
import NextButton from "../components/NextButton";
import { useNavigate } from "react-router-dom";

function Step2InputPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [startTime, setStartTime] = useState<TimeValue>({
    hour: '09',
    minute: '00',
    period: '오전',
  } as const);
  const [endTime, setEndTime] = useState<TimeValue>({
    hour: '06',
    minute: '00',
    period: '오후',
  } as const);
  const [target, setTarget] = useState<'start' | 'end'>('start');
  const handleOpenModal = (which: 'start' | 'end') => {
    setTarget(which);
    setModalOpen(true);
  }
  const handleConfirm = (selected: TimeValue) => {
    if (target === 'start') setStartTime(selected);
    else setEndTime(selected);
    setModalOpen(false);
  }
  const navigate = useNavigate();


  return (
    <main>
      <h1>시작하기</h1>
      <h2>출퇴근 시간을 입력해주세요.</h2>
      <TimeInputWrapper>
        <WorkTimeInput
          label="출근"
          value={startTime}
          onClick={() => handleOpenModal('start')}
        />
        <WorkTimeInput
          label="퇴근"
          value={endTime}
          onClick={() => handleOpenModal('end')}
        />
      </TimeInputWrapper>
      <TimePickerModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        initialValue={target === 'start' ? startTime : endTime}
      />
      <h2>근무 요일을 모두 선택해주세요.</h2>
      <WorkdaysWrapper>
        <WorkdaysButton day="월" />
        <WorkdaysButton day="화" />
        <WorkdaysButton day="수" />
        <WorkdaysButton day="목" />
        <WorkdaysButton day="금" />
        <WorkdaysButton day="토" />
        <WorkdaysButton day="일" />
      </WorkdaysWrapper>

      <NextButton label="NEXT" onClick={() => navigate("/step3")} />

    </main>

  )
}

export default Step2InputPage;

const TimeInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const WorkdaysWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 690px;
`