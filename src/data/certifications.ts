export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

// Empty until real certifications are added — the Certifications section hides itself
// when this list is empty, since CLAUDE.md marks the section as optional.
export const certifications: Certification[] = [];
