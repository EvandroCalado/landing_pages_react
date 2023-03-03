import TextComponent from '.';

const TextComponentStories = {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur aliquid modi ipsum itaque molestias quaerat delectus. Eos commodi repellat at quam quidem, officia vel, voluptates voluptatum mollitia ut illum!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export default TextComponentStories;

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
