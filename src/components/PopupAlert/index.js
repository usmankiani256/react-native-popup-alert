import * as React from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'
import { View, Text, ScrollView, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import showAlert from '../../store/Actions/ShowAlert'
import styles from './styles'

var emitter = require('tiny-emitter/instance')

// let samplePayload = {
//   type: 'success',
//   autoDismiss: false,
//   title: 'Custom Alert Message',
//   body: 'This is a custom alert message',
//   buttons: [
//     {
//       name: 'Okay',
//       onPress: () => {},
//     },
//   ],
// }

export const showPopup = (payload) => {
  emitter.emit('Show_Alert_Fired', payload)
}

const Alert = (props) => {
  const dispatch = useDispatch()

  const SA = useSelector((state) => state.ShowAlert)
  const alert = !SA.isLoading && SA.success && SA.data

  let isSuccess = alert?.type === 'success'
  let isError = alert?.type === 'error'
  let isUnexpected = alert?.type === 'unexpected'

  React.useEffect(() => {
    emitter.on('Show_Alert_Fired', function (payload) {
      dispatch(showAlert(payload))
    })
  }, [])

  React.useEffect(() => {
    if (alert && alert.autoDismiss) {
      console.debug('Auto Dismiss after 6 seconds.')
      setTimeout(() => {
        console.debug('Auto Dismissed.')
        hideDialog()
      }, 6000)
    }
  }, [alert])

  function hideDialog() {
    dispatch(showAlert(null))
  }

  if (alert) {
    let title = alert.title || 'Custom Alert'
    let body = alert.body || 'This is a custom alert description'

    return (
      <Portal>
        <Dialog
          dismissable={false}
          style={styles.root}
          visible
          onDismiss={hideDialog}
        >
          <Dialog.Title>{title}</Dialog.Title>
          <ScrollView>
            <View style={styles.content}>
              {(isSuccess || isError || isUnexpected) && (
                <Image
                  style={{
                    ...styles.animation,
                    height: isUnexpected ? 150 : 80,
                    width: isUnexpected ? 150 : 80,
                    marginBottom: isUnexpected ? 0 : 25,
                    marginTop: isUnexpected ? -5 : 0,
                  }}
                  source={
                    isSuccess
                      ? require('../../../src/images/success.png')
                      : isError
                      ? require('../../../src/images/error.png')
                      : require('../../../src/images/unexpected.png')
                  }
                />
              )}
              <Text style={styles.body}>{body}</Text>
            </View>
            {alert.buttons && (
              <Dialog.Actions>
                {alert.buttons.map(({ name, onPress }, index) => {
                  let len = alert.buttons.length

                  return (
                    <Button
                      theme={
                        index === len - 1 ? styles.themePrimary : styles.theme
                      }
                      key={index}
                      onPress={onPress}
                    >
                      {name}
                    </Button>
                  )
                })}
              </Dialog.Actions>
            )}
          </ScrollView>
        </Dialog>
      </Portal>
    )
  } else {
    return null
  }
}

export default Alert
