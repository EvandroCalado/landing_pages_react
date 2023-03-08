import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

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
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
