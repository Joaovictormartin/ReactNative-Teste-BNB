import { StyleSheet } from 'react-native';
import { theme } from '../../../../styles/theme';

export const styles = StyleSheet.create({
  wrapperFilter: {
    gap: 5,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 15,
    marginVertical: 26,
    paddingVertical: 7,
    paddingHorizontal: 12,
    backgroundColor: theme.colors.white,
  },
  input: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.text,
  },
});
