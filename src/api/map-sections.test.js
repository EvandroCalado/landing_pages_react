import {
  mapImageGrid,
  mapPricing,
  mapSectionContact,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import dataSections from './data.json';

describe('map-sections', () => {
  it('should render if no data sections', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render else', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should render with data sections', () => {
    const data = mapSections(dataSections[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.image).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map with data section two columns', () => {
    const data = mapSectionTwoColumns(dataSections[0].sections[0]);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.image).toBe(
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1678735252/javascript_200e4162bb.svg'
    );
    expect(data.text).toBe(
      'To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.'
    );
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });

  it('should render if no data section content', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map with data section content', () => {
    const data = mapSectionContent(dataSections[0].sections[1]);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe(
      'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.\\n\\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\\n\\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.'
    );
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });

  it('should map with grid text', () => {
    const data = mapTextGrid(dataSections[0].sections[2]);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.title).toBe('my grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.'
    );
  });

  it('should map without data grid text', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map without data grid data', () => {
    const data = mapTextGrid({
      text_grid: [{ title: undefined, description: undefined }],
    });
    expect(data.grid[0].title).toBe('');
    expect(data.grid[0].description).toBe('');
  });

  it('should map with grid image', () => {
    const data = mapImageGrid(dataSections[0].sections[3]);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.title).toBe('gallery');
    expect(data.grid[0].image).toBe(
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1678745403/photo_1649001052863_099932ef80d1_901e8323be_d2cc483df1.jpg'
    );
    expect(data.grid[0].altText).toBe(
      'photo_1649001052863_099932ef80d1_901e8323be.jpg'
    );
  });

  it('should map without grid image', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map with section pricing', () => {
    const data = mapPricing(dataSections[0].sections[5]);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-pricing');
    expect(data.sectionId).toBe('pricing');
    expect(data.description_one).toBe(
      'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.'
    );

    expect(data.description_two).toBe(
      'We’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.'
    );
    expect(data.table[0]).toEqual({
      body: 'content1',
      footer: 'footer 1',
      head: 'title 1',
      id: 1,
    });
  });

  it('should map without data section pricing', () => {
    const data = mapPricing(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description_one).toBe('');
    expect(data.description_two).toBe('');
  });

  it('should map with section contact', () => {
    const data = mapSectionContact(dataSections[0].sections[6]);
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-contact');
    expect(data.sectionId).toBe('contact');
    expect(data.first_name).toBe('First Name');
    expect(data.last_name).toBe('Last Name');
    expect(data.email).toBe('Email');
    expect(data.message).toBe('Message');
    expect(data.button).toBe('Send Message');
  });

  it('should map with fake data section contact', () => {
    const data = mapSectionContact(undefined);
    expect(data.background).toBe(true);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.first_name).toBe('');
    expect(data.last_name).toBe('');
    expect(data.email).toBe('');
    expect(data.message).toBe('');
    expect(data.button).toBe('');
  });
});
