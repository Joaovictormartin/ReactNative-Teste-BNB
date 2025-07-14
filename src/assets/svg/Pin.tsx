import React from 'react';
import Svg, { Image, SvgProps } from 'react-native-svg';

const Pin: React.FC<SvgProps> = props => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Image
        width="24"
        height="24"
        id="image0_1_784"
        preserveAspectRatio="none"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nN1UQUrEMBTNEQRRBFeOggdw4cJr6LqU5r0k7S2cuYNUL+AsXM8JZqvewIXbAcfRlYupBFooMZak0wHxwYPA/3nv//wkQvx7aK33SU5IPpH8tATwCGBsYxuJk7wiuSJZ/cKVUupyE/F1h3jDdbRJfSxdlVdtAnhP03QvpvqJR+gNQGlJcumJXwcbAHh2xaWUR03cGDNyTezgYww+nM03npzSHXiMwcIxKN0ckndOziLYgOTcPSJjzKgVP/bMYR7TwdgzxCXJ25o/hmz3BBtkWXYS+Aaqhlrr02CDuotZxDuYiVhIKc8iujgXfUByGiA+FX2R5/mBvUFdX4RS6rC3Qd0FO6qnGAIA7j3VP4ihkCTJDoCXlsFrURS7YkgopS5IflnatdgGSBrLrYj/WXwDdwqXAmJM1mMAAAAASUVORK5CYII="
      />
    </Svg>
  );
};

export default Pin;
