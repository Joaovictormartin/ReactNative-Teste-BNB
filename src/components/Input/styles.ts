import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,

    borderWidth: 1,
    borderRadius: 8,
  },
  borderColorPrimaryVariant: {
    borderColor: theme.colors.primaryVariant,
  },
  borderColorSecondary: {
    borderColor: theme.colors.secondary,
  },
  textInput: {
    width: '100%',
    height: '100%',

    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.secondary,
  },
  colorPrimaryVariant: {
    color: theme.colors.primaryVariant,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
});
