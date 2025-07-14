import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    color: theme.colors.text,
  },
  form: {
    flex: 1,
    gap: 20,
  },
  footer: {
    gap: 10,
    marginBottom: 20,
  },
});
