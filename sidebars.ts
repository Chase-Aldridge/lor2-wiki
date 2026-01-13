import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * World of LOR Wiki Sidebar Configuration
 * Comprehensive structure with all nested content
 */
const sidebars: SidebarsConfig = {
  lorSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Aeternum',
      link: {
        type: 'doc',
        id: 'aeternum/index',
      },
      items: [
        {
          type: 'category',
          label: 'Characters',
          link: {
            type: 'doc',
            id: 'aeternum/characters/index',
          },
          items: [
            'aeternum/characters/sho',
            'aeternum/characters/zadshen',
            'aeternum/characters/ulrick',
            'aeternum/characters/arca',
            'aeternum/characters/nynora',
          ],
        },
        {
          type: 'category',
          label: 'Story',
          items: [
            'aeternum/story/act-1',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: "Gul'Rath",
      link: {
        type: 'doc',
        id: 'gulrath/index',
      },
      items: [
        {
          type: 'category',
          label: 'Kingdoms',
          link: {
            type: 'doc',
            id: 'gulrath/kingdoms/index',
          },
          items: [
            'gulrath/kingdoms/ironhelm',
            'gulrath/kingdoms/ithiltara',
            'gulrath/kingdoms/cormandir',
            'gulrath/kingdoms/tamaryen',
            'gulrath/kingdoms/volanlek',
            'gulrath/kingdoms/jalurian',
            'gulrath/kingdoms/saint-helensberg',
            'gulrath/kingdoms/dragmar-aer',
          ],
        },
        {
          type: 'category',
          label: 'Factions',
          link: {
            type: 'doc',
            id: 'gulrath/factions/index',
          },
          items: [
            'gulrath/factions/golden-legion',
          ],
        },
        {
          type: 'category',
          label: 'Characters',
          link: {
            type: 'doc',
            id: 'gulrath/characters/index',
          },
          items: [],
        },
        'gulrath/pantheon',
      ],
    },
    {
      type: 'category',
      label: 'Plagas',
      link: {
        type: 'doc',
        id: 'plagas/index',
      },
      items: [
        {
          type: 'category',
          label: 'Characters',
          link: {
            type: 'doc',
            id: 'plagas/characters/index',
          },
          items: [
            'plagas/characters/brandon',
            'plagas/characters/dylan',
            'plagas/characters/nathaniel',
            'plagas/characters/noah',
          ],
        },
        {
          type: 'category',
          label: 'Locations',
          link: {
            type: 'doc',
            id: 'plagas/locations/index',
          },
          items: [
            'plagas/locations/fort-runestone',
            'plagas/locations/pol-tarei',
            'plagas/locations/sea-drake-tavern',
          ],
        },
        {
          type: 'category',
          label: 'NPCs',
          link: {
            type: 'doc',
            id: 'plagas/npcs/index',
          },
          items: [
            'plagas/npcs/ragur-thorne',
            'plagas/npcs/grey-skar',
            'plagas/npcs/markus-swiftsail',
          ],
        },
        {
          type: 'category',
          label: 'Mechanics',
          link: {
            type: 'doc',
            id: 'plagas/mechanics/index',
          },
          items: [
            'plagas/mechanics/bankai-rules',
            'plagas/mechanics/level-progression',
          ],
        },
        {
          type: 'category',
          label: 'Lore',
          items: [
            'plagas/lore/pantheon',
            'plagas/lore/narcotics',
          ],
        },
        {
          type: 'category',
          label: 'Story',
          link: {
            type: 'doc',
            id: 'plagas/story/index',
          },
          items: [
            'plagas/story/prologue',
            'plagas/story/act-1',
            'plagas/story/legend-of-rusitauri',
          ],
        },
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
