import { useCallback, useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Filter } from './components/Filter';
import { useAuth } from '../../contexts/auth';
import { ButtonAdd } from './components/ButtonAdd';
import { CardItemUser } from '../../components/CardItemUser';
import { getClientsByUserId } from '../../actions/getClientsByUserId';

import { styles } from './styles';

export interface ClientsProps {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  favorite: boolean;
  latitude: number;
  longitude: number;
  userId: number;
}

const RegisterPage = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  const [search, setSearch] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [allClients, setAllUsers] = useState<ClientsProps[]>([]);

  const usersFiltered = allClients.filter(user => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleNavigateNewRegister = () => navigate('NewRegister');

  const fetchClients = useCallback(async () => {
    if (!user?.id) return;
    const response = await getClientsByUserId(user?.id);
    setAllUsers(response);
  }, [user?.id]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      fetchClients();
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchClients();
    }, [user?.id]),
  );

  return (
    <View style={styles.container}>
      <Filter search={search} setSearch={setSearch} />

      <FlatList
        data={usersFiltered}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <CardItemUser data={item} onRefresh={fetchClients} />
        )}
      />

      <ButtonAdd onPress={handleNavigateNewRegister} />
    </View>
  );
};

export default RegisterPage;
