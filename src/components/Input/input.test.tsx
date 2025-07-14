import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Input } from './index';
import { styles } from './styles';

describe('Input', () => {
  it('deve renderizar sem erros', () => {
    const { getByTestId } = render(<Input testID="input-textinput" />);
    expect(getByTestId('input-textinput')).toBeTruthy();
  });

  it('deve aplicar o estilo "primary" por padrão', () => {
    const { getByTestId } = render(<Input />);
    const container = getByTestId('input-container');

    const style = container.props.style;
    const flatStyleArray = Array.isArray(style) ? style : [style];

    const hasPrimaryBorderColor = flatStyleArray.some(
      (s: any) =>
        s?.borderColor === styles.borderColorPrimaryVariant.borderColor,
    );

    expect(hasPrimaryBorderColor).toBe(true);
  });

  it('deve aplicar o estilo "secondary" quando passado', () => {
    const { getByTestId } = render(<Input type="secondary" />);
    const container = getByTestId('input-container');

    const style = container.props.style;
    const flatStyleArray = Array.isArray(style) ? style : [style];

    const hasSecondaryBorderColor = flatStyleArray.some(
      (s: any) => s?.borderColor === styles.borderColorSecondary.borderColor,
    );

    expect(hasSecondaryBorderColor).toBe(true);
  });

  it('deve repassar props para o TextInput', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = render(
      <Input
        testID="input-textinput"
        placeholder="Digite aqui"
        value="valor"
        onChangeText={onChangeTextMock}
      />,
    );
    const input = getByTestId('input-textinput');

    expect(input.props.placeholder).toBe('Digite aqui');
    expect(input.props.value).toBe('valor');

    fireEvent.changeText(input, 'novo valor');
    expect(onChangeTextMock).toHaveBeenCalledWith('novo valor');
  });
});
