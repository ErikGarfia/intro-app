import React from 'react';

import { Intro } from '../../components';

const animation = require('../../animations/awareness.json');

const IntroOne = () => (
  <Intro
    animation={animation}
    title="Primer pantalla"
    body="Presentacion de lo que hace la aplicaciòn."
  />
);
export default IntroOne;
