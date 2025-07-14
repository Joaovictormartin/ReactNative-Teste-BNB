import { Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../styles/theme';
import { useAuth } from '../../contexts/auth';
import homePNG from '../../assets/png/home.png';
import UserPlus from '../../assets/svg/UserPlus';
import { ButtonHome } from './components/buttonHome';
import locationPNG from '../../assets/png/Location.png';

import { styles } from './styles';

const HomePage = () => {
  const { user, logout } = useAuth();
  const { navigate } = useNavigation();

  const handleNavigateMap = () => navigate('ClientsMap');
  const handleNavigateRegister = () => navigate('Register');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Olá, {user?.name}</Text>

        <View style={styles.location}>
          <Image source={locationPNG} style={styles.locationIcon} />
          <Text style={styles.locationText}>{user?.hash}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Image source={homePNG} style={styles.homeImage} />

        <View style={styles.wrapperButton}>
          <ButtonHome
            icon={UserPlus}
            title="Cadastros"
            onPress={handleNavigateRegister}
          />
          <ButtonHome
            icon={UserPlus}
            onPress={handleNavigateMap}
            title="Consultar Organização"
          />
        </View>

        <Button
          title="Sair"
          onPress={logout}
          color={theme.colors.primaryVariant}
        />
      </View>
    </View>
  );
};

export default HomePage;
