import * as React from 'react'
import { Button, Dialog, Portal, IconButton } from 'react-native-paper'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

var emitter = require('tiny-emitter/instance')

// let samplePayload = {
//   icon: 'camera',
//   iconColor: 'green',
//   iconSize: 25,
//   autoDismiss: 5,
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
  const [alert, setAlert] = React.useState(null)

  React.useEffect(() => {
    emitter.on('Show_Alert_Fired', function (payload) {
      setAlert(payload)
    })
  }, [])

  React.useEffect(() => {
    if (alert && alert.autoDismiss && alert.autoDismiss > 0) {
      console.debug(`Auto Dismiss after ${alert.autoDismiss} seconds.`)
      setTimeout(() => {
        console.debug('Auto Dismissed.')
        hideDialog()
      }, alert.autoDismiss * 1000)
    }
  }, [alert])

  function hideDialog() {
    setAlert(null)
  }

  if (!alert) {
    return null
  }

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
            <View style={styles.iconContainer}>
              {alert.icon && (
                <IconButton
                  icon={alert.icon}
                  color={alert.iconColor || 'grey'}
                  size={alert.iconSize || 30}
                />
              )}
            </View>
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
}

export default Alert
