import GridContent from '.';
import { args } from './args';

const GridContentStories = {
  title: 'GridContent',
  component: GridContent,
  args: args,
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

export default GridContentStories;
