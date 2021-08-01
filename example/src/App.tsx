import React, { useEffect } from 'react'
import PopupAlertModule, { Counter } from 'react-native-popup-alert'

const App = () => {
  useEffect(() => {
    console.log(PopupAlertModule)
  })

  return <Counter />
}

export default App
