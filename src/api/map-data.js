export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml: footer,
      slug,
      title,
      sections,
      menu,
    };
  });
};
