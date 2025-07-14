import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../styles/theme';
import ArrowLeft from '../../assets/svg/ArrowLeft';

export const ButtonGoBack: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <ArrowLeft width={48} height={48} fill={theme.colors.white} />
    </TouchableOpacity>
  );
};
