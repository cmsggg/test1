// ===== Library Import =====

import React from "react"

// ===== Module Import =====

import CounterComponent from "./component/CounterComponent"
import ButtonsComponent from "./component/ButtonsComponent"
import UnitComponent from "./component/UnitComponent"   // 예제 2)

// ===== Code =====

const App = () => {

    // 더 이상 state를 컴포넌트에 선언할 필요가 없으므로 삭제
    // const [number, setNumber] = React.useState(0)

    // 더 이상 자식 컴포넌트로 props를 내려줄 필요가 없으므로 삭제
    // return (
    //     <React.Fragment>
    //         <CounterComponent number={number}/>
    //         <ButtonsComponent number={number} setNumber={setNumber}/>
    //     </React.Fragment>
    // )
    return (
        <React.Fragment>
            <CounterComponent />
            <ButtonsComponent />
            <UnitComponent />   {/* 예제 2) */}
        </React.Fragment>
    )
}

export default App