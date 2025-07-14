import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Phone: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill={props.fill}
        d="M20.51 15.38C19.28 15.38 18.09 15.18 16.98 14.82C16.63 14.7 16.24 14.79 15.97 15.06L14.4 17.03C11.57 15.68 8.92 13.13 7.51 10.2L9.46 8.54C9.73 8.26 9.81 7.87 9.7 7.52C9.33 6.41 9.14 5.22 9.14 3.99C9.14 3.45 8.69 3 8.15 3H4.69C4.15 3 3.5 3.24 3.5 3.99C3.5 13.28 11.23 21 20.51 21C21.22 21 21.5 20.37 21.5 19.82V16.37C21.5 15.83 21.05 15.38 20.51 15.38Z"
      />
    </Svg>
  );
};

export default Phone;
