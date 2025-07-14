import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  header: {
    marginTop: 79,
    marginBottom: 60,
    paddingHorizontal: 21,
  },
  title: {
    fontSize: 48,
    color: theme.colors.secondary,
    fontWeight: '700',
  },
  location: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 24,
    height: 24,
  },
  locationText: {
    fontSize: 20,
    color: theme.colors.text,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.text_100,
  },
  homeImage: {
    width: '100%',
    height: 143,
    borderRadius: 20,
    marginBottom: 39,
  },
  wrapperButton: {
    gap: 17,
    alignItems: 'center',
    marginBottom: 40,
  },
});
