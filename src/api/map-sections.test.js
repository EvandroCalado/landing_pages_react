import {
  mapImageGrid,
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
    const withNoImageGrid = mapSections(
      dataSections.data[0].attributes.sections
    );
    const withNoComponent = mapSections([]);

    expect(withNoImageGrid[2].component).toBe('section.section-grid-text');
    expect(withNoComponent).toEqual([]);
  });

  it('should render with data sections', () => {
    const data = mapSections(dataSections.data);
    expect(data[0].attributes.sections[0].__component).toBe(
      'section.section-two-columns'
    );
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
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'teste',
      image: {
        data: {
          id: 3,
          attributes: {
            name: 'javascript.svg',
            alternativeText: null,
            caption: null,
            width: 1030,
            height: 730,
            formats: null,
            hash: 'javascript_b09ce7919e',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'image.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_b09ce7919e',
              resource_type: 'image',
            },
            createdAt: '2023-02-27T15:12:45.912Z',
            updatedAt: '2023-02-27T15:12:45.912Z',
          },
        },
      },
      metadata: {
        id: 1,
        name: 'home',
        section_id: 'home',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.image).toBe('image.svg');
    expect(data.text).toBe('teste');
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
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'NEWS COVERAGE AND SOME SURPRISES',
      content: 'teste',
      metadata: {
        id: 3,
        name: 'intro',
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('teste');
    expect(data.title).toBe('NEWS COVERAGE AND SOME SURPRISES');
  });

  it('should map with grid text', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      metadata: {
        id: 2,
        name: 'gallery',
        section_id: 'gallery',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Teste 1',
          description: 'Lorem',
        },
        {
          id: 2,
          title: 'Teste 2',
          description: 'Lorem',
        },
        {
          id: 3,
          title: 'Teste 3',
          description: 'Lorem',
        },
      ],
      image_grid: [],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.title).toBe('MY GRID');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Lorem');
  });

  it('should map without data grid text', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map with grid image', () => {
    const data = mapImageGrid({
      "id": 1,
      "__component": "section.section-grid-image",
      "title": "gallery",
      "description": "Uma breve descrição.\n\n",
      "metadata": {
        "id": 4,
        "name": "gallery",
        "section_id": "gallery",
        "background": false
      },
      "image_grid": [
        {
          "id": 6,
          "title": "gallery",
          "description": "Uma breve descrição.",
          "image_gallery": {
            "data": [
              {
                "id": 10,
                "attributes": {
                  "name": "photo-1592459996257-081359053570.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1592459996257_081359053570_a9fa420eb0.jpg",
                      "hash": "thumbnail_photo_1592459996257_081359053570_a9fa420eb0",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1592459996257-081359053570.jpg",
                      "path": null,
                      "size": 3.96,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1592459996257_081359053570_a9fa420eb0",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1592459996257_081359053570_a9fa420eb0",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 14.64,
                  "url": "teste.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1592459996257_081359053570_a9fa420eb0",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:31.013Z",
                  "updatedAt": "2023-02-27T18:39:31.013Z"
                }
              },
              {
                "id": 9,
                "attributes": {
                  "name": "photo-1629997047282-41f678126175.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1629997047282_41f678126175_c9c8690c82.jpg",
                      "hash": "thumbnail_photo_1629997047282_41f678126175_c9c8690c82",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1629997047282-41f678126175.jpg",
                      "path": null,
                      "size": 6.6,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1629997047282_41f678126175_c9c8690c82",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1629997047282_41f678126175_c9c8690c82",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 27.43,
                  "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/photo_1629997047282_41f678126175_c9c8690c82.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1629997047282_41f678126175_c9c8690c82",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:30.862Z",
                  "updatedAt": "2023-02-27T18:39:30.862Z"
                }
              },
              {
                "id": 8,
                "attributes": {
                  "name": "photo-1649001052863-099932ef80d1.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1649001052863_099932ef80d1_901e8323be.jpg",
                      "hash": "thumbnail_photo_1649001052863_099932ef80d1_901e8323be",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1649001052863-099932ef80d1.jpg",
                      "path": null,
                      "size": 5.61,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1649001052863_099932ef80d1_901e8323be",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1649001052863_099932ef80d1_901e8323be",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 19.58,
                  "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523170/photo_1649001052863_099932ef80d1_901e8323be.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1649001052863_099932ef80d1_901e8323be",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:30.812Z",
                  "updatedAt": "2023-02-27T18:39:30.812Z"
                }
              },
              {
                "id": 7,
                "attributes": {
                  "name": "photo-1633843195379-b4ed419ddea2.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1633843195379_b4ed419ddea2_fc5a42851e.jpg",
                      "hash": "thumbnail_photo_1633843195379_b4ed419ddea2_fc5a42851e",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1633843195379-b4ed419ddea2.jpg",
                      "path": null,
                      "size": 7.94,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1633843195379_b4ed419ddea2_fc5a42851e",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1633843195379_b4ed419ddea2_fc5a42851e",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 33.37,
                  "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/photo_1633843195379_b4ed419ddea2_fc5a42851e.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1633843195379_b4ed419ddea2_fc5a42851e",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:30.626Z",
                  "updatedAt": "2023-02-27T18:39:30.626Z"
                }
              },
              {
                "id": 6,
                "attributes": {
                  "name": "photo-1607802875758-3aaa1a149203.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1607802875758_3aaa1a149203_62d3188c12.jpg",
                      "hash": "thumbnail_photo_1607802875758_3aaa1a149203_62d3188c12",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1607802875758-3aaa1a149203.jpg",
                      "path": null,
                      "size": 8.68,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1607802875758_3aaa1a149203_62d3188c12",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1607802875758_3aaa1a149203_62d3188c12",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 34.32,
                  "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/photo_1607802875758_3aaa1a149203_62d3188c12.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1607802875758_3aaa1a149203_62d3188c12",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:30.594Z",
                  "updatedAt": "2023-02-27T18:39:30.594Z"
                }
              },
              {
                "id": 5,
                "attributes": {
                  "name": "photo-1552666262-1f35b9080e83.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 360,
                  "height": 360,
                  "formats": {
                    "thumbnail": {
                      "ext": ".jpg",
                      "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/thumbnail_photo_1552666262_1f35b9080e83_f38813e26c.jpg",
                      "hash": "thumbnail_photo_1552666262_1f35b9080e83_f38813e26c",
                      "mime": "image/jpeg",
                      "name": "thumbnail_photo-1552666262-1f35b9080e83.jpg",
                      "path": null,
                      "size": 4.17,
                      "width": 156,
                      "height": 156,
                      "provider_metadata": {
                        "public_id": "thumbnail_photo_1552666262_1f35b9080e83_f38813e26c",
                        "resource_type": "image"
                      }
                    }
                  },
                  "hash": "photo_1552666262_1f35b9080e83_f38813e26c",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 14.88,
                  "url": "https://res.cloudinary.com/dnhsdenji/image/upload/v1677523169/photo_1552666262_1f35b9080e83_f38813e26c.jpg",
                  "previewUrl": null,
                  "provider": "cloudinary",
                  "provider_metadata": {
                    "public_id": "photo_1552666262_1f35b9080e83_f38813e26c",
                    "resource_type": "image"
                  },
                  "createdAt": "2023-02-27T18:39:30.425Z",
                  "updatedAt": "2023-02-27T18:39:30.425Z"
                }
              }
            ]
          }
        }
      ]
    },);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.title).toBe('gallery');
    expect(data.grid[0].image).toBe('teste.jpg');
    // expect(data.grid[0].altText).toBe(null);
  });

  it('should map without grid image', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
  });
});
