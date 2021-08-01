import React, { useEffect } from 'react'
import { PopupAlert, showPopup } from 'react-native-popup-alert'

const App = () => {
  useEffect(() => {
    showPopup({
      type: 'success',
      autoDismiss: false,
      title: 'Custom Alert',
      body: 'This is a custom alert for testing the Alert component',
      buttons: [
        {
          name: 'Okay',
          onPress: () => {
            showPopup(null)
          },
        },
      ],
    })
  }, [])

  return <PopupAlert />
}

export default App
