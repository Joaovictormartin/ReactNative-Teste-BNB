import { useState } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../styles/theme';
import { useAuth } from '../../contexts/auth';
import { Input } from '../../components/Input';
import { createClient } from '../../actions/createClient';
import { Button as ButtonComponent } from '../../components/Button';

const NewRegisterPage = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    avatar: '',
    latitude: '',
    longitude: '',
    favorite: false,
  });

  const submit = async () => {
    if (form.name === '') {
      Alert.alert('Atenção', 'O campo name é obrigatório');
      return;
    }
    if (form.phone === '') {
      Alert.alert('Atenção', 'O campo telefone é obrigatório');
      return;
    }
    if (form.latitude === '') {
      Alert.alert('Atenção', 'O campo latitude é obrigatório');
      return;
    }
    if (form.longitude === '') {
      Alert.alert('Atenção', 'O campo longitude é obrigatório');
      return;
    }

    await createClient({ ...form, userId: user?.id });

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso', [
      {
        text: 'OK',
        onPress: () => goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo cadastro</Text>

      <View style={styles.form}>
        <Input
          type="secondary"
          value={form.name}
          placeholder="Nome"
          autoCapitalize="none"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={text => setForm({ ...form, name: text })}
        />
        <Input
          type="secondary"
          value={form.phone}
          autoCapitalize="none"
          placeholder="Telefone"
          keyboardType="numeric"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={text => setForm({ ...form, phone: text })}
        />
        <Input
          type="secondary"
          value={form.avatar}
          placeholder="Avatar"
          autoCapitalize="none"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={text => setForm({ ...form, avatar: text })}
        />
        <Input
          type="secondary"
          value={form.latitude}
          autoCapitalize="none"
          placeholder="Latitude"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={text => setForm({ ...form, latitude: `${text}` })}
        />
        <Input
          type="secondary"
          autoCapitalize="none"
          value={form.longitude}
          placeholder="Longitude"
          placeholderTextColor={theme.colors.secondary}
          onChangeText={text => setForm({ ...form, longitude: text })}
        />
      </View>

      <View style={styles.footer}>
        <ButtonComponent type="secondary" onPress={submit}>
          Cadastrar
        </ButtonComponent>

        <Button title="Voltar" onPress={goBack} />
      </View>
    </View>
  );
};

export default NewRegisterPage;
