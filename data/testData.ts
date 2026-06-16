declare const process: any;

export const TEST_CONSTANTS = {
  BASE_URL: process.env.BASE_URL || 'https://iris.revelarautomation.com',
  CASE_TOKEN: process.env.CASE_TOKEN || '6236a25ba73388af081c29d1fedcd3cfb9af659af8d369dea3faa7eb3c431fe7',
  ROLES: {
    TEST_SUBJECT: {
      LABEL: 'Test Subject',
      PASSWORD: 'iris-subject-2026',
      DEFAULT_ID: 'S-0001'
    },
    JUNIOR_COORDINATOR: {
      LABEL: 'Junior Test Coordinator',
      PASSWORD: 'iris-junior-2026',
      DEFAULT_ID: 'S-0002'
    },
    DIRECTOR: {
      LABEL: 'Director of Enrichment',
      PASSWORD: 'Iris-Welcome-2026!',
      DEFAULT_ID: 'director'
    }
  },
  SUBJECT_IDS: {
    VALID_SEARCH_FORMAT: 'S-0002',
    VALID_NUMERIC_FORMAT: '0002',
    SUBJECT_0001: 'S-0001',
    SUBJECT_0002: 'S-0002'
  },

};
