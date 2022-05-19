import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hello } from './Hello';

export default {
  title: 'Components/Hello',
  component: Hello,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: "Hello world"
};
