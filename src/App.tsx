import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { Routes } from './routes';
import { theme } from './styles/theme';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={theme.colors.primary}
      />

      <SafeAreaView style={styles.container}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
