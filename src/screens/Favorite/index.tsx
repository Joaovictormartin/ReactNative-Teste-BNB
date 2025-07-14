import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList, Text, RefreshControl } from 'react-native';

import { ClientsProps } from '../Register';
import { useAuth } from '../../contexts/auth';
import { CardItemUser } from '../../components/CardItemUser';
import { getClientsByUserIdFavorite } from '../../actions/getClientsByUserIdFavorite';

import { styles } from './styles';

const FavoritePage = () => {
  const { user } = useAuth();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [allClients, setAllUsers] = useState<ClientsProps[]>([]);

  const fetchFavorite = async () => {
    if (!user?.id) return;
    const response = await getClientsByUserIdFavorite(user.id);
    setAllUsers(response);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      fetchFavorite();
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchFavorite();
    }, [user?.id]),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allClients}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <CardItemUser data={item} onRefresh={fetchFavorite} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum favorito encontrado...
          </Text>
        )}
      />
    </View>
  );
};

export default FavoritePage;
