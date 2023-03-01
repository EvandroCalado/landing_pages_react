import Heading from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const light = (args) => <Heading {...args} />;
export const dark = (args) => <Heading {...args} />;

light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
