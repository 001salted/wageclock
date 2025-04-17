import styled from "styled-components";
import { FaRunning } from "react-icons/fa";

interface GaugeComponentProps {
    state : number;
    color : string;
}

function GaugeComponent ({state, color}:GaugeComponentProps) {

    return(
        <GaugeComponentWrap>
            <Gauge $state={state} $color = {color}>
                {state + '%'}
            </Gauge>
            <FaRunning size={60} color={color}/>
        </GaugeComponentWrap>
    )
};

export default GaugeComponent;

const GaugeComponentWrap = styled.div`
    display: flex;
    width: 750px;
    height: 60px;
`;

const Gauge = styled.div<{$state:number, $color:string}>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: ${(props)=>`${props.$state/100*720}`}px;
    background-color: #${(props)=> `${props.$color}`};
    padding-right: 20px;
    font-size: 32px;
    font-family:'Press Start 2P';
`;