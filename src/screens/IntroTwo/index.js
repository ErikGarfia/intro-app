import React from 'react';

import { Intro } from '../../components';

const animation = require('../../animations/map.json');

const IntroTwo = () => (
  <Intro
    animation={animation}
    title="Segunda pantalla"
    body="Desarrollo de la presentaciòn."
  />
);
export default IntroTwo;
