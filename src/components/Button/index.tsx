import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  ...props
}) => {
  return (
    <TouchableOpacity
      testID="button"
      activeOpacity={0.7}
      style={[
        styles.container,
        type === 'primary' && styles.backgroundPrimary,
        type === 'secondary' && styles.backgroundPrimaryVariant,
      ]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
