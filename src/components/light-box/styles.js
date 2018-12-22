import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    backgroundColor: 'rgba(6, 26, 60, 0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '94%',
    maxWidth: 336,
    borderRadius: 4,
    backgroundColor: '$colors.white',
    paddingHorizontal: 20,
    paddingVertical: 27,
  },
})
