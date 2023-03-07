import Footer from '.';

const FooterStories = {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://github.com/EvandroCalado">Feito com 💕 por Evandro Calado</a></p>`,
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
