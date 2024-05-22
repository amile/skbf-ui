import React from 'react';
import {ThemeLayout} from './theme-layout';

export default {
    title: "Theme/Theme",
    component: ThemeLayout,
};

const Template = (args) => <ThemeLayout {...args} />;

export const Theme = Template.bind({});
Theme.args = {
  dark: false,
};
