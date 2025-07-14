import { Image, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../styles/theme';
import Favorite from '../../assets/svg/Favorite';
import { ClientsProps } from '../../screens/Register';
import avatarDefault from '../../assets/png/avatarDefault.png';
import { toggleFavorite } from '../../actions/toggleFavoriteClient';

import { styles } from './styles';

interface CardProps {
  data: ClientsProps;
  onRefresh: () => void;
}

export const CardItemUser: React.FC<CardProps> = ({ data, onRefresh }) => {
  const { primaryVariant, text } = theme.colors;

  const handleToggleFavorite = async (item: ClientsProps) => {
    await toggleFavorite(item);
    onRefresh();
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={data.avatar ? { uri: data.avatar } : avatarDefault}
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {data.name}
        </Text>
        <Text numberOfLines={1} style={styles.phone}>
          {data.phone}
        </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleToggleFavorite(data)}
      >
        <Favorite
          width={26}
          height={26}
          fill={data.favorite ? primaryVariant : text}
        />
      </TouchableOpacity>
    </View>
  );
};
