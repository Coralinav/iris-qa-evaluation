declare const process: any;

export const TEST_CONSTANTS = {
  BASE_URL: process.env.BASE_URL || '',
  CASE_TOKEN: process.env.CASE_TOKEN || '',
  ROLES: {
    TEST_SUBJECT: {
      LABEL: 'Test Subject',
      PASSWORD: process.env.TEST_SUBJECT_PASSWORD || '',
      DEFAULT_ID: 'S-0001'
    },
    JUNIOR_COORDINATOR: {
      LABEL: 'Junior Test Coordinator',
      PASSWORD: process.env.JUNIOR_COORDINATOR_PASSWORD || '',
      DEFAULT_ID: 'S-0002'
    },
    DIRECTOR: {
      LABEL: 'Director of Enrichment',
      PASSWORD: process.env.DIRECTOR_PASSWORD || '',
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
