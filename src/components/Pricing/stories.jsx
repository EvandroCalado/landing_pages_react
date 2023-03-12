import Pricing from '.';

const PricingStories = {
  title: 'Pricing',
  component: Pricing,
  args: {...Pricing},
};

export const Template = (args) => {
  return (
    <div>
      <Pricing {...args} />
    </div>
  );
};

export default PricingStories;
