import Base from '.';
import args from './mock';

const BaseStories = {
  title: 'Templates/Base',
  component: Base,
  args: args,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};

export default BaseStories;
