import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../styles/theme';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { styles } from './styles';

const LoginPage = () => {
  const { login: loginAction } = useAuth();
  const { navigate } = useNavigation();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword(state => !state);

  const handleNavigateForgetPassword = () => navigate('ForgetPassword');

  const submit = useCallback(async () => {
    await loginAction(login.trim(), password.trim().toString()).then(resp => {
      if (!resp) return Alert.alert('Login ou senha inválido');

      return navigate('AuthRoutes');
    });
  }, [login, password]);

  return (
    <View style={styles.container}>
      <View style={styles.cardForm}>
        <Text style={styles.title}>Seja bem vindo!</Text>

        <View style={styles.form}>
          <Input
            value={login}
            type="secondary"
            placeholder="Login"
            autoCapitalize="none"
            onChangeText={setLogin}
            placeholderTextColor={theme.colors.secondary}
          />

          <Input
            value={password}
            type="secondary"
            placeholder="Senha"
            onChangeText={setPassword}
            secureTextEntry={showPassword}
            placeholderTextColor={theme.colors.secondary}
            onClickShowPassword={handleClickShowPassword}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleNavigateForgetPassword}
          >
            <Text style={styles.forgotPassword}>Redefinir senha</Text>
          </TouchableOpacity>

          <Button type="secondary" onPress={submit}>
            ENTRAR
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
