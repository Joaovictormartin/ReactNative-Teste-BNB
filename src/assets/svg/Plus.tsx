import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Plus: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
    </Svg>
  );
};

export default Plus;
