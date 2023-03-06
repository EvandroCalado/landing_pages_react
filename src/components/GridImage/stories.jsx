import GridImage from '.';

import { args } from './args';

const GridImageStories = {
  title: 'GridImage',
  component: GridImage,
  args: args,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};

export default GridImageStories;
