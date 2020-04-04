import React from 'react';

import { Intro } from '../../components';

const animation = require('../../animations/health.json');

const IntroThree = () => (
  <Intro
    animation={animation}
    title="Pantalla tres"
    body="Ultima pantalla."
  />
);
export default IntroThree;
