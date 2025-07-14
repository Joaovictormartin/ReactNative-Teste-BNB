import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Favorite: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill={props.fill}
        d="M12.5 21.35L11.05 20.03C5.9 15.36 2.5 12.28 2.5 8.5C2.5 5.42 4.92 3 8 3C9.74 3 11.41 3.81 12.5 5.09C13.59 3.81 15.26 3 17 3C20.08 3 22.5 5.42 22.5 8.5C22.5 12.28 19.1 15.36 13.95 20.04L12.5 21.35Z"
      />
    </Svg>
  );
};

export default Favorite;
