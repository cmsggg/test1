import React from "react"

import { useSelector } from "react-redux"

const Label = () => {

    // 더이상 props로 받아줄 필요가 없음
    // 내가 필요하면 그냥 store에 접근해서 가져오면 됨
    const number = useSelector(state => state.number)

    return (
        <p>{number}</p>
    )
}

export default Label