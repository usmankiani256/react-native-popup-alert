# react-native-popup-alert

This is a custom component for React Native, a simple popup alert, compatible with ios and android.

## Installation

#### yarn

```
yarn add react-native-popup-alert
```

#### npm

```
npm i --save react-native-popup-alert
```

## Usage

```js
import React, { useEffect } from 'react'
import { PopupAlert, showPopup } from 'react-native-popup-alert'

const App = () => {
  // Call the PopupAlert Component on component mount
  useEffect(() => {
    showPopup({
      type: 'unexpected',
      autoDismiss: false,
      title: 'Custom Alert',
      body: 'This is a custom alert for testing the Alert component',
      buttons: [
        {
          name: 'Okay',
          onPress: () => showPopup(null),
        },
      ],
    })
  }, [])

  // Render the Alert Component, recommended to use in initial screen
  return <PopupAlert />
}

export default App
```

### PopupAlert

<!-- Description here -->

### showPopup

<!-- Description here -->
<!-- Params here eg type, autoDismiss etc -->

#### params

| Param       | Type    | Description                                                                                                                                                        | Default                              |
| :---------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| autoDismiss | Boolean | If `true` Alert will be dismissed after 6 seconds.                                                                                                                 | `false`                              |
| showAlert   | Func    | The actual function used to call the popup component                                                                                                               | -                                    |
| title       | String  | The Title of the popup alert component                                                                                                                             | "Alert"                              |
| body        | String  | The body of the popup alert component                                                                                                                              | "This is a custom alert description" |
| buttons     | Array   | An array of buttons passed to the component, the button object passed has the following props:\ > label - The label of the button,\ > onPress - The onPress Callback | -                                    |

<!--
## Contributing

## Credits -->

## License

MIT License

Copyright (c) 2021 Muhammad Usman Kiani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
