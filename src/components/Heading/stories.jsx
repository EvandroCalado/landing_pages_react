import Heading from '.';
const HeadingStories = {
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

export default HeadingStories;

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
