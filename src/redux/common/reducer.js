import { createStore } from "redux"

const defaultState = {
    "number": 0
}

// 1. 처음으로 화면이 들어올 때 실행
// 2. dispatch 명령어가 실행될 때 실행
const reducer = (state = initState, action) => {

    // Action에 따라서, State에 어떤 작업을 해줄지의 내용
    // 기존에 Component의 Event 내에서 State 조작을 해주던 것을
    // 이젠 Reducer로 역할 위임을 할 것

    // switch의 역할은, 전체 State를 반환하는 역할
    switch (action.type) {
        case "INC_NUMBER":
            return {
                ...state,
                "number": state.number + 1
            }
        case "DEC_NUMBER":
            return {
                ...state,
                "number": state.number - 1
            }
        default:
            return state
    }

    // state를 관리하는건 이제 컴포넌트가 아니라 reducer가 하는구나를 알 수 있음
}

const store = createStore(reducer)

export default store