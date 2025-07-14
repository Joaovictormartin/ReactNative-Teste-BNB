import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';

import { styles } from './styles';

interface InputProps extends TextInputProps {
  type?: 'primary' | 'secondary';
  onClickShowPassword?: () => void;
}

export const Input: React.FC<InputProps> = ({ type = 'primary', ...props }) => {
  return (
    <View
      testID="input-container"
      style={[
        styles.container,
        type === 'secondary' && styles.borderColorSecondary,
        type === 'primary' && styles.borderColorPrimaryVariant,
      ]}
    >
      <TextInput
        {...props}
        testID="input-textinput"
        style={[
          styles.textInput,
          type === 'secondary' && styles.colorSecondary,
          type === 'primary' && styles.colorPrimaryVariant,
        ]}
      />
    </View>
  );
};
