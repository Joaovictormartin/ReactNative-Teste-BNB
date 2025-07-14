import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonHomeProps extends TouchableOpacityProps {
  title: string;
  icon: React.FC<SvgProps>;
}

export const ButtonHome: React.FC<ButtonHomeProps> = ({
  title,
  icon: Icon,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...props}>
      <Icon width={57} height={45} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
