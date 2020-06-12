import React from 'react';

import { Button } from './Button';
import Text, { TextWeights } from 'ui/Typography/Typography';

export default {
  title: 'Button',
  component: Button,
};

export const Emoji = () => <Text weight={TextWeights.bold}>hey</Text>;
