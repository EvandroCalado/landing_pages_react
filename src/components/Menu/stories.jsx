import Menu from '.';

import {mock} from "../Navbar/mock"

const MenuStories = {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: "Logo",
      link:  "#target",
      image: "",
    }
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};

export default MenuStories