import * as React from 'react'
import Alert from './components/PopupAlert/index.js'
import { Provider } from 'react-native-paper'

var emitter = require('tiny-emitter/instance')

const PopupAlert = () => {
  const [alert, setAlert] = React.useState({})

  React.useEffect(() => {
    emitter.on('Show_Alert_Fired', function (payload: Object) {
      setAlert(payload)
    })
  }, [])

  function hideDialog() {
    setAlert({})
  }

  return (
    <Provider>
      <Alert alert={alert} hideDialog={hideDialog} />
    </Provider>
  )
}

const showPopup = (payload: Object) => {
  emitter.emit('Show_Alert_Fired', payload)
}

export { PopupAlert, showPopup }
