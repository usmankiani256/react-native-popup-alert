import React, { useEffect } from 'react'
import { Button, Dialog, Portal } from 'react-native-paper'
import { View, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import showAlert from '../../store/Actions/ShowAlert'
import LottieView from 'lottie-react-native'
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

  useEffect(() => {
    emitter.on('Show_Alert_Fired', function (payload) {
      dispatch(showAlert(payload))
    })
  }, [])

  useEffect(() => {
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
    return (
      <Portal>
        <Dialog style={styles.root} visible onDismiss={hideDialog}>
          <Dialog.Title>{alert.title}</Dialog.Title>
          <ScrollView>
            <View style={styles.content}>
              {(isSuccess || isError || isUnexpected) && (
                <LottieView
                  loop={isUnexpected}
                  autoPlay={true}
                  style={{
                    ...styles.animation,
                    height: isUnexpected ? 150 : 80,
                    width: isUnexpected ? 150 : 80,
                    marginBottom: isUnexpected ? 0 : 25,
                    marginTop: isUnexpected ? -5 : 0,
                  }}
                  source={
                    isSuccess
                      ? require('../../images/success.json')
                      : isError
                      ? require('../../images/error.json')
                      : require('../../images/unexpected.json')
                  }
                />
              )}
              <Text style={styles.body}>{alert.body}</Text>
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
