import { useState } from "react";
import styled from "styled-components"

interface WorkdaysButtonType {
    day: string;
};

function WorkdaysButton ({day}: WorkdaysButtonType){
    const [stateButton, setStateButton] = useState(false);

    const handleChangeStateButton = () => {
        setStateButton(!stateButton)
    };

    return (
        <>
            <WorkdaysButtonWrap onClick={handleChangeStateButton} $stateButton={stateButton}>
                {day}
            </WorkdaysButtonWrap>
        </>
    )
};

const WorkdaysButtonWrap = styled.div<{$stateButton: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: ${(props) => props.$stateButton?`#1f4223`:`#ccd9c4`};
    font-size: 26px;
    color: ${(props) => props.$stateButton?`#b0fe5b`:`#ffffff`};
    font-family:'DungGeunMo';
`;

export default WorkdaysButton