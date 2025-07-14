import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.text_100,
  },
  flatListStyle: {
    width: '100%',
    marginTop: 26,
  },
  flatListContent: {
    paddingHorizontal: 7,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.text_100,
  },
  emptyListText: {
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    color: theme.colors.black,
  },
});
