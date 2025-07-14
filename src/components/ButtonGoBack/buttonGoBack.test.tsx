import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { ButtonGoBack } from './index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

describe('ButtonGoBack', () => {
  it('deve renderizar o botão', () => {
    const { getByTestId } = render(<ButtonGoBack />);
    expect(getByTestId('button-go-back')).toBeTruthy();
  });

  it('deve chamar goBack ao pressionar o botão', () => {
    const goBackMock = jest.fn();

    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({ goBack: goBackMock });

    const { getByTestId } = render(<ButtonGoBack />);
    fireEvent.press(getByTestId('button-go-back'));
    expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
