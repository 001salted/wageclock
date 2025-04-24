import { useState } from "react";
import WorkTimeInput from "../components/WorkTimeInput";
import TimePickerModal, { TimeValue } from "../components/TimePickerModal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputPageLayout from "../components/InputPageLayout";
import WorkdayCalendar from "../components/WorkdayCalendar";

function Step2InputPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [startTime, setStartTime] = useState<TimeValue>({
    hour: "09",
    minute: "00",
    period: "오전",
  } as const);
  const [endTime, setEndTime] = useState<TimeValue>({
    hour: "06",
    minute: "00",
    period: "오후",
  } as const);
  const [target, setTarget] = useState<"start" | "end">("start");

  const handleOpenModal = (which: "start" | "end") => {
    setTarget(which);
    setModalOpen(true);
  };
  const handleConfirm = (selected: TimeValue) => {
    if (target === "start") setStartTime(selected);
    else setEndTime(selected);
    setModalOpen(false);
  };
  const navigate = useNavigate();

  return (
    <>
      <InputPageLayout
        step={2}
        onNext={() => navigate("/step3")}
        sections={[
          {
            title: "출퇴근 시간을 입력해주세요.",
            content: (
              <TimeInputWrapper>
                <WorkTimeInput
                  label="출근"
                  value={startTime}
                  onClick={() => handleOpenModal("start")}
                />
                <WorkTimeInput
                  label="퇴근"
                  value={endTime}
                  onClick={() => handleOpenModal("end")}
                />
              </TimeInputWrapper>
            ),
          },
          {
            title: "근무 요일을 모두 선택해주세요.",
            content: (
              <WorkdaysWrapper>
                <WorkdayCalendar />
              </WorkdaysWrapper>
            ),
          },
        ]}
      />
      <TimePickerModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        initialValue={target === "start" ? startTime : endTime}
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
  gap: 10px;
  width: 690px;
`;
