import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  backgroundPrimary: {
    backgroundColor: theme.colors.primary,
  },
  backgroundPrimaryVariant: {
    backgroundColor: theme.colors.primaryVariant,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.white,
  },
});
1;
