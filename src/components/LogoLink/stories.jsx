import LogoLink from '.';

const LogoLinkStories = {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    image: 'assets/images/logo.svg',
    link: 'https://google.com.br',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  image: '',
};

export default LogoLinkStories;
