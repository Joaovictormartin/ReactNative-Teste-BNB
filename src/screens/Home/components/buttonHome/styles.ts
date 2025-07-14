import { StyleSheet } from 'react-native';
import { theme } from '../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '80%',
    height: 124,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 17,
    backgroundColor: theme.colors.white,

    borderStyle: 'solid',
    borderBottomWidth: 10,
    borderBottomColor: theme.colors.primaryVariant,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.text,
  },
});
