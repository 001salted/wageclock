import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputPageLayout from '../components/InputPageLayout';
import TimePickerModal, { TimeValue } from '../components/TimePickerModal';
import WorkdayCalendar from '../components/WorkdayCalendar';
import WorkTimeInput from '../components/WorkTimeInput';
import { useWage } from '../contexts/WageContext';

function Step2InputPage() {
  const { wageData, setWageData } = useWage();

  const [isModalOpen, setModalOpen] = useState(false);
  const [target, setTarget] = useState<'start' | 'end'>('start');

  const handleOpenModal = (which: 'start' | 'end') => {
    setTarget(which);
    setModalOpen(true);
  };

  const handleConfirm = (selected: TimeValue) => {
    if (target === 'start') {
      setWageData(prev => ({ ...prev, startTime: selected }));
    } else {
      setWageData(prev => ({ ...prev, endTime: selected }));
    }
    setModalOpen(false);
  };

  const handleChangeDays = (days: Date[]) => {
    setWageData(prev => ({ ...prev, selectedDays: days }));
  };

  const navigate = useNavigate();

  return (
    <>
      <InputPageLayout
        step={2}
        onNext={() => {
          if (wageData.selectedDays.length !== 0) {
            navigate('/step3');
          } else {
            alert('근무 요일을 선택해주세요!');
          }
        }}
        sections={[
          {
            title: '출퇴근 시간을 입력해주세요.',
            content: (
              <TimeInputWrapper>
                <WorkTimeInput
                  label="출근"
                  value={wageData.startTime}
                  onClick={() => handleOpenModal('start')}
                />
                <WorkTimeInput
                  label="퇴근"
                  value={wageData.endTime}
                  onClick={() => handleOpenModal('end')}
                />
              </TimeInputWrapper>
            ),
          },
          {
            title: '근무 요일을 모두 선택해주세요.',
            content: (
              <WorkdaysWrapper>
                <WorkdayCalendar selectedDays={wageData.selectedDays} onChange={handleChangeDays} />
              </WorkdaysWrapper>
            ),
          },
        ]}
      />
      <TimePickerModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        initialValue={target === 'start' ? wageData.startTime : wageData.endTime}
      />
    </>
  );
}

export default Step2InputPage;

const TimeInputWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const WorkdaysWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 690px;
`;
