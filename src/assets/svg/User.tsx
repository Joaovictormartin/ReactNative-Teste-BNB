import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const User: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill={props.fill}
        d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM12.5 5C14.16 5 15.5 6.34 15.5 8C15.5 9.66 14.16 11 12.5 11C10.84 11 9.5 9.66 9.5 8C9.5 6.34 10.84 5 12.5 5ZM12.5 19.2C10 19.2 7.79 17.92 6.5 15.98C6.53 13.99 10.5 12.9 12.5 12.9C14.49 12.9 18.47 13.99 18.5 15.98C17.21 17.92 15 19.2 12.5 19.2Z"
      />
    </Svg>
  );
};

export default User;
