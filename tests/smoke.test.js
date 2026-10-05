import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'manuscripts',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Manuscripts',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '4ca47641-f0ff-50a2-a7c3-b3adf3abb210',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '35dafca1-8ab1-5d22-8ffd-d39248a402df',
    dynasty: {
      item: '89a86236-adc3-549a-bfa6-2e0e2a3a3b00',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: 'd321bef5-3599-590f-a696-aa3a0d57d455',
      name: 'Benaki Museum',
      city: 'Athens',
      country: 'Greece',
      objects: 3,
    },
  },
})
