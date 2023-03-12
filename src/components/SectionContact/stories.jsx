import SectionContact from '.';

const SectionContactStories = {
  title: 'SectionContact',
  component: SectionContact,
  args: {
    children: 'SectionContact',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContact {...args} />
    </div>
  );
};

export default SectionContactStories;
