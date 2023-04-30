import { StyleSheet } from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 56,
    maxHeight: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: THEME.COLORS.PINK_MID,
    marginRight: 16,
  },
  title: {
    color: THEME.COLORS.PINK_MID,
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },
})
