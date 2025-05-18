import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputPageLayout from '../components/input/InputPageLayout';
import WageInput from '../components/input/WageInput';
import WageTypeToggle from '../components/input/WageTypeToggle';
import InputPageModal from '../components/InputPageModal';
import { useWage } from '../contexts/WageContext';

function Step1InputPage() {
  const { wageData, setWageData } = useWage();
  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();

  return (
    <main>
      <InputPageLayout
        step={1}
        sections={[
          {
            title: '급여 기준을 선택해주세요.',
            content: (
              <WageTypeToggle
                value={wageData.wageType === 'hourly' ? '시급' : '월급'}
                onChange={val => {
                  const type = val === '시급' ? 'hourly' : 'monthly';
                  setWageData(prev => ({ ...prev, wageType: type }));
                }}
              />
            ),
          },
          {
            title: '급여를 입력해주세요.',
            content: (
              <WageInput
                wageType={wageData.wageType}
                value={wageData.wageAmount}
                onChange={val => setWageData(prev => ({ ...prev, wageAmount: val }))}
              />
            ),
          },
        ]}
        onNext={() => {
          if (wageData.wageAmount) {
            navigate('/step2');
          } else {
            setModalState(!modalState);
          }
        }}
      />
      {modalState ? (
        <InputPageModal
          text="급여를 입력해주세요!"
          onClose={(state: boolean) => setModalState(state)}
        />
      ) : (
        <></>
      )}
    </main>
  );
}

export default Step1InputPage;
