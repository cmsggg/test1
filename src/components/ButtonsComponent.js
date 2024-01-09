import React from "react"

import { useDispatch } from "react-redux"
import { incNumber, decNumber } from "../redux/Action"

const Buttons = () => {
    const dispatch = useDispatch()

    // 더이상 pross 받아줄 필요가 없음
    // 내가 원할 때 그냥 action가지고 dispatch 호출하면 됨
    // +@ 더이상 이벤트 내에서 state 변화 로직을 작성하지 않음
    const controlEvent = (e) => {
        switch (e.target.id) {
            case "plus":
                dispatch(incNumber())
                break
            case "minus":
                dispatch(decNumber())
                break
        }
    }

    return (
        <div onClick={controlEvent}>
            <input id="plus" type="button" value="+" />
            <input id="minus" type="button" value="-" />
        </div>
    )
}

export default Buttons