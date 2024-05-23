import React from 'react';
import {Avatar, Card} from 'antd';
import {NoShadowCard} from '../../components/card/card';

export default {
    title: "Components/Card",
};

const CardBody = () => (
  <Card.Meta
      avatar={<Avatar size={64} />}
      title={'User'}
      description={
        <div>user@mail.ru</div>
      }
  />
);

const Template = (args) => (
  <Card {...args}>
    <CardBody />
  </Card>
);

const NoShadowTemplate = (args) => (
  <NoShadowCard {...args}>
    <CardBody />
  </NoShadowCard>
);

export const Default = Template.bind({});
Default.args = {
  bordered: false,
};

export const NoShadow = NoShadowTemplate.bind({});
NoShadow.args = {
  bordered: false,
};
