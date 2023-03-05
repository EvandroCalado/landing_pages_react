import GridTwoColumn from '.';
import { args } from './args';

const GridTwoColumnStories = {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: args,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};

export default GridTwoColumnStories;
