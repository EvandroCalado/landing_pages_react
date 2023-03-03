import Navbar from '.';
import { mock } from './mock';

const NavbarStories = {
  title: 'Navbar',
  component: Navbar,
  args: {
    links: mock,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Navbar {...args} />
    </div>
  );
};

export default NavbarStories;
