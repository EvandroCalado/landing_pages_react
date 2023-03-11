export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid-text') {
      return mapTextGrid(section);
    }

    if (section.__component === 'section.section-grid-image') {
      return mapImageGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: image = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    image,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid,
  } = section;

  const imageGrid = image_grid[0].image_gallery.data;

  return {
    component,
    title,
    description,
    background,
    sectionId,
    grid: imageGrid.map((img) => {
      const { url: image, name: altText } = img.attributes;

      return {
        image,
        altText,
      };
    }),
  };
};
