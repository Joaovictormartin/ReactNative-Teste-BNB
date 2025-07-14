import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    gap: 4,
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    color: theme.colors.black,
  },
  phone: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textLight,
  },
});
