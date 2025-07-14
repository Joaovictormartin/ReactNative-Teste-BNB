import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from './index';
import { theme } from '../../styles/theme';

describe('Button', () => {
  it('deve renderizar o texto passado como children', () => {
    const { getByText } = render(<Button>Entrar</Button>);
    expect(getByText('Entrar')).toBeTruthy();
  });

  it('deve aplicar o estilo "primary" por padrão', () => {
    const { getByTestId } = render(<Button testID="button">Entrar</Button>);
    const button = getByTestId('button');

    const style = button.props.style;
    const flatStyleArray = Array.isArray(style) ? style : [style];

    const hasPrimaryStyle = flatStyleArray.some(
      (s: any) => s?.backgroundColor === theme.colors.primary,
    );

    expect(hasPrimaryStyle).toBe(true);
  });

  it('deve aplicar o estilo "secondary" quando passado', () => {
    const { getByTestId } = render(
      <Button testID="button" type="secondary">
        Voltar
      </Button>,
    );
    const button = getByTestId('button');

    const style = button.props.style;
    const flatStyleArray = Array.isArray(style) ? style : [style];

    const hasSecondaryStyle = flatStyleArray.some(
      (s: any) => s?.backgroundColor === theme.colors.primaryVariant,
    );

    expect(hasSecondaryStyle).toBe(true);
  });

  it('deve chamar onPress quando pressionado', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
      <Button onPress={onPressMock}>Clique aqui</Button>,
    );

    fireEvent.press(getByText('Clique aqui'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
