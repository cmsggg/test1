// ===== Library Import =====

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"   // redux 라이브러리에서 import

// ===== Module Import =====

import App from "./App"

// ===== Code =====

// 최상단 부모 컴포넌트를 Provider로 묶어주는 것으로 기본 설정은 끝
ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={store}><App/></Provider>)