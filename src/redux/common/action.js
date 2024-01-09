// 컴포넌트에서 Store에 전달하고 싶은 명령어 1개마다 1개의 함수

// 이제부터 컴포넌트에서 State에 접근하지 않음

// action은 reducer한테 전달될 명령어
// 개발적으로 보면, action의 역할은 단순히 object를 return하는 함수

const incrementNumber = () => {
    return {
        "type": "INCREMENT_NUMBER"
    }
}

const decrementNumber = () => {
    return {
        "type": "DECREMENT_NUMBER"
    }
}

// 예제 2)
const setDiff = (data) => {
    return {
        "type": "SET_DIFF",
        "value": data
    }
}

export { incrementNumber, decrementNumber, setDiff }