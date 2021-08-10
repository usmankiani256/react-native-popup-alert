import * as React from 'react'
import { Button, Dialog, Portal, IconButton } from 'react-native-paper'
import { View, Text, ScrollView } from 'react-native'
import styles from './styles'

const Alert = (props) => {
  const { alert, hideDialog } = props

  React.useEffect(() => {
    if (alert && alert.autoDismiss && alert.autoDismiss > 0) {
      console.debug(`Auto Dismiss after ${alert.autoDismiss} seconds.`)
      setTimeout(() => {
        console.debug('Auto Dismissed.')
        hideDialog()
      }, alert.autoDismiss * 1000)
    }
  }, [alert])

  if (JSON.stringify(alert) === '{}') {
    return null
  }

  let title = alert.title || 'Custom Alert'
  let body = alert.body || 'This is a custom alert description'
  let icon = alert.icon
  let iconColor = alert.iconColor
  let iconSize = alert.iconSize
  let buttons = alert.buttons

  return (
    <Portal testID='alert'>
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
              {icon && (
                <IconButton
                  icon={icon}
                  color={iconColor || 'grey'}
                  size={iconSize || 30}
                />
              )}
            </View>
            <Text style={styles.body}>{body}</Text>
          </View>
          {buttons && (
            <Dialog.Actions>
              {buttons.map(({ name, onPress }, index) => {
                let len = buttons.length

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
