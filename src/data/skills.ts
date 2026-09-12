// Technology names are proper nouns — identical in both languages, so they live here
// rather than in the i18n locale files. Category labels are translated in home.json.
export const skillCategories = {
  languages: ['TypeScript', 'JavaScript', 'Java'],
  backend: ['Node.js', 'NestJS', 'LoopBack 4', 'Spring Boot 3', 'JWT / OAuth 2.0'],
  frontend: ['Vue 3', 'Vuetify', 'Angular', 'React (learning)'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
  infrastructure: ['Docker', 'Linux', 'Nginx', 'PM2', 'Git'],
} as const;

export type SkillCategoryKey = keyof typeof skillCategories;
