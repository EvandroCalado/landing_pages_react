import SectionContainer from '.';

const SectionContainerStories = {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: 'SectionContainer',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};

export default SectionContainerStories