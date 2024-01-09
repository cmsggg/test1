// ===== Library Import =====

import React from "react"
import { useSelector, useDispatch } from "react-redux"   // redux 라이브러리에서 import

// ===== Module Import =====

import { setNumber } from "../action/action"   // 만든 Action Import

// ===== Code =====

const UnitComponent = () => {

    const unit = useSelector(state => state.unit)
    const dispatch = useDispatch()

    return (
        <input type="text" value={unit} onChange={(e) => dispatch(setNumber(parseInt(e.target.value)))} />
    )
}

export default UnitComponent