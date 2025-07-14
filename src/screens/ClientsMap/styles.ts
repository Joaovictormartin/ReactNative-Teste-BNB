import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  centralize: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutContainer: {
    width: 150,
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  phone: {
    fontWeight: '400',
    fontSize: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    top: 40,
    left: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: theme.colors.white,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  zoomButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: theme.colors.white,
  },
});
