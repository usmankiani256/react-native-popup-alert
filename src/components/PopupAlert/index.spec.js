import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import PopupAlert, { showPopup } from './index.js'

let mock = {
  alert: {
    icon: 'alert-circle',
    iconSize: 70,
    iconColor: 'orange',
    title: 'Custom Alert',
    body: 'This is a custom alert for testing the Alert component',
    buttons: [
      {
        name: 'Cancel',
        onPress: () => {
          showPopup(null)
        },
      },
      {
        name: 'Okay',
        onPress: () => {
          showPopup(null)
        },
      },
    ],
  },
}

describe('<PopupAlert />', () => {
  it('should match snapshot: null', () => {
    let wrapper = shallow(<PopupAlert />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot: alert', () => {
    let wrapper = shallow(<PopupAlert alert={mock.alert} />)

    expect(wrapper).toMatchSnapshot()
  })

  /* Other Cases:
    - Renders icon
    - Contains icon size
    - icon is of color passed
    - Renders title
    - Renders body
    - Renders buttons
  
  */
})
