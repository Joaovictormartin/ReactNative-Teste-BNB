import { Image, Text, TextInput, View } from 'react-native';

import { theme } from '../../../../styles/theme';
import Search from '../../../../assets/svg/Search';

import { styles } from './styles';

interface FilterProps {
  search: string;
  setSearch: (value: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ search, setSearch }) => {
  return (
    <View style={styles.wrapperFilter}>
      <Search width={18} height={18} />
      <TextInput
        value={search}
        style={styles.input}
        placeholder="Procurar"
        onChangeText={setSearch}
        placeholderTextColor={theme.colors.text}
      />
    </View>
  );
};
