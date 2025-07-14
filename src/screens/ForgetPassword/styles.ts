import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  cardForm: {
    width: '90%',
    alignItems: 'center',

    paddingTop: 33,
    paddingBottom: 26,
    paddingHorizontal: 36,
    borderRadius: 12,
    backgroundColor: theme.colors.white,

    elevation: 15,
    shadowRadius: 25,
    shadowOpacity: 0.5,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 11 },
  },
  title: {
    fontSize: 24,
    lineHeight: 42,
    color: theme.colors.secondary,
    fontWeight: '800',
    letterSpacing: 1.15,
    marginBottom: 24,
  },
  form: {
    gap: 17,
  },
  forgotPassword: {
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 1.15,
    textAlign: 'center',
    color: theme.colors.text,
  },
});
