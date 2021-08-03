import * as React from 'react'
import Alert, { showPopup } from './components/PopupAlert/index.js'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import store from './store'

const PopupAlert = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Alert />
      </PaperProvider>
    </Provider>
  )
}

export { PopupAlert, showPopup }
