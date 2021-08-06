import * as React from 'react'
import Alert, { showPopup } from './components/PopupAlert/index.js'
import { Provider as PaperProvider } from 'react-native-paper'

const PopupAlert = () => {
  return (
    <PaperProvider>
      <Alert />
    </PaperProvider>
  )
}

export { PopupAlert, showPopup }
