import Pricing from '.';

import { args } from './args';

const PricingStories = {
  title: 'Pricing',
  component: Pricing,
  args: args
};

export const Template = (args) => {
  return (
    <div>
      <Pricing {...args} />
    </div>
  );
};

export default PricingStories