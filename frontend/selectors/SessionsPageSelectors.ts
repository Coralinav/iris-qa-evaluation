export const SessionsPageSelectors = {
  createSessionButton: 'button:has-text("New session"), button:has-text("Create")',
  nextButton: 'button:has-text("Next")',
  scheduleButton: 'button:has-text("Schedule"), button:has-text("Schedule Session")',
  subjectDropdown: 'select[name="subject_id"], select[placeholder*="subject"]',
  chamberDropdown: 'select[name="chamber_id"], select[placeholder*="chamber"]',
  apparatusDropdown: 'select[name="apparatus_id"], select[placeholder*="apparatus"]'
};
