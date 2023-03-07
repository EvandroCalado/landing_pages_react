export const mapMenu = (menu = {}) => {
  const {
    menu_links: { open_in_new_tab: newTab = false } = '',
    logo_text: text = '',
    logo_link: link = '',
    logo: { data: { attributes: { url: image = '' } = '' } = '' } = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    image,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      link_text: children = '',
      url: link = '',
      open_in_new_tab: newTab = false,
    } = item;

    return {
      children,
      link,
      newTab,
    };
  });
};
