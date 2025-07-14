import { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../styles/theme';
import { Input } from '../../components/Input';
import { Button as ButtonComponent } from '../../components/Button';

import { styles } from './styles';

const ForgetPasswordPage = () => {
  const { goBack } = useNavigation();

  const [login, setLogin] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.cardForm}>
        <Text style={styles.title}>Redefinir senha</Text>

        <View style={styles.form}>
          <Input
            value={login}
            type="secondary"
            placeholder="Login"
            onChangeText={setLogin}
            placeholderTextColor={theme.colors.secondary}
          />

          <ButtonComponent type="secondary">ENVIAR</ButtonComponent>
          <Button title="Voltar" onPress={goBack} />
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordPage;
