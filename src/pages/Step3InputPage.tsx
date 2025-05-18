import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputPageLayout from '../components/input/InputPageLayout';
import InputPageModal from '../components/input/InputPageModal';
import PaydaySelector from '../components/input/PaydaySelector';
import { useWage } from '../contexts/WageContext';

function Step3InputPage() {
  const { wageData, setWageData } = useWage();
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <InputPageLayout
        step={3}
        nextLabel="계산하기"
        onNext={() => {
          if (wageData.payday) {
            navigate('/load');
          } else {
            setModalState(!modalState);
          }
        }}
        sections={[
          {
            title: '급여일을 선택해주세요.',
            content: (
              <PaydaySelector
                value={wageData.payday}
                onChange={(val: number) => setWageData(prev => ({ ...prev, payday: val }))}
              />
            ),
          },
        ]}
      />
      {modalState ? (
        <InputPageModal
          text="급여일을 선택해주세요!"
          onClose={(state: boolean) => setModalState(state)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Step3InputPage;
