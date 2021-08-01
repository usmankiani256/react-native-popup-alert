import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = {
  root: {
    width: width * 0.85,
    alignSelf: 'center',
  },
  animation: {
    alignSelf: 'center',
  },
  content: {
    marginHorizontal: 25,
    marginBottom: 12,
  },
  body: {
    fontSize: 17,
    lineHeight: 19,
    textAlign: 'justify',
  },
  themePrimary: {
    colors: {
      primary: '#3f3f3f',
    },
  },
  theme: {
    colors: {
      primary: '#777777',
    },
  },
}

export default styles
