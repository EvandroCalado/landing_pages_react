import GridSection from '.';
import { args } from './args';

const GridSectionStories = {
  title: 'GridSection',
  component: GridSection,
  args: args,
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};

export default GridSectionStories;
