import Footer from '.';

const FooterStories = {
  title: 'Footer',
  component: Footer,
  args: {
    children: `<p><a href="https://github.com/EvandroCalado">Feito com 💕 por Evandro Calado</a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};

export default FooterStories;
