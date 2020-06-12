import React from 'react';

import Typography, { TextWrappers, TextWeights, ColorTypes } from './Typography';

interface Paragraph {
  children: React.ReactNode;
}

const Paragraph: React.FC<Paragraph> = ({ children }) => (
  <Typography
    wrapper={TextWrappers.header1}
    weight={TextWeights.bold}
    accent={ColorTypes.secondary}
  >
    {children}
  </Typography>
);

export default Paragraph;
