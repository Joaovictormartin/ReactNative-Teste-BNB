import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ArrowLeft: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        fill="#EAEAEA"
        d="M24.7071 16.2929C25.0976 16.6834 25.0976 17.3166 24.7071 17.7071L19.4142 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H19.4142L24.7071 30.2929C25.0976 30.6834 25.0976 31.3166 24.7071 31.7071C24.3166 32.0976 23.6834 32.0976 23.2929 31.7071L16.2929 24.7071C15.9024 24.3166 15.9024 23.6834 16.2929 23.2929L23.2929 16.2929C23.6834 15.9024 24.3166 15.9024 24.7071 16.2929Z"
      />
    </Svg>
  );
};

export default ArrowLeft;
