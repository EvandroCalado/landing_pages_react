import SectionBackground from '.';

const SectionBackgroundStories = {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: 'SectionBackground',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};

export default SectionBackgroundStories