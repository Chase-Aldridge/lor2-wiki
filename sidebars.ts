import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * World of LOR Wiki Sidebar Configuration
 * Simple, clean structure for easy navigation
 */
const sidebars: SidebarsConfig = {
  lorSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Campaigns',
      items: [
        'aeternum',
        'gulrath',
        'plagas',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'gods',
        'mechanics',
      ],
    },
  ],
};

export default sidebars;
