import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import Plus from '../../../../assets/svg/Plus';

interface ButtonAddProps extends TouchableOpacityProps {}

export const ButtonAdd: React.FC<ButtonAddProps> = props => {
  return (
    <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.7} {...props}>
      <Plus width={24} height={24} />
    </TouchableOpacity>
  );
};
