// Structural, language-independent project data. Prose (summary, problem, features text,
// challenges, lessons learned) lives in src/i18n/locales/*/projects.json, keyed by slug.
export interface Project {
  slug: string;
  techFrontend: string[];
  techBackend: string[];
  /** Screenshot filenames under public/images/projects/<slug>/, in display order. */
  screenshots?: string[];
  /** Short demo video under public/videos/projects/<slug>/ (no audio, so no captions track is needed). */
  video?: {
    file: string;
    poster: string;
  };
  links?: {
    github?: string;
    demo?: string;
  };
  /** The live demo is shared privately: the case study invites visitors to ask for it by WhatsApp or email. */
  demoOnRequest?: boolean;
}

export const projects: Project[] = [
  // Ordered from most recent to oldest.
  {
    slug: 'dental-clinic-management-system',
    techFrontend: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'],
    techBackend: ['NestJS', 'TypeORM', 'MySQL'],
    screenshots: [
      '01-tablero-indicadores.webp',
      '02-agenda-semanal.webp',
      '03-mi-dia-odontologo.webp',
      '04-ficha-paciente.webp',
      '05-recordatorios-whatsapp.webp',
      '06-agendar-turno.webp',
      '07-cuenta-corriente.webp',
      '08-listado-pacientes.webp',
      '09-configuracion-usuarios.webp',
    ],
    video: {
      file: 'demo.mp4',
      poster: 'poster.webp',
    },
    demoOnRequest: true,
  },
  {
    slug: 'insurance-appraisal-platform',
    techFrontend: ['Vue 3', 'Pinia', 'Tailwind CSS'],
    techBackend: ['NestJS', 'TypeORM', 'MySQL', 'Vertex AI (Gemini)'],
    screenshots: [
      '01-login.webp',
      '02-listado-siniestros-art.webp',
      '03-detalle-siniestro-art.webp',
      '04-detalle-informe-conclusiones.webp',
      '05-detalle-documentacion-fotos.webp',
      '06-checklist-antifraude.webp',
      '07-notificar-inspector.webp',
      '08-nuevo-siniestro-carga-ia.webp',
      '09-listado-pericias-mecanicas.webp',
      '10-detalle-pericia-mecanica.webp',
      '11-aseguradoras.webp',
      '12-usuarios.webp',
      '13-modo-oscuro.webp',
    ],
  },
  {
    slug: 'claims-management-platform',
    techFrontend: ['Vue 3', 'Pinia', 'Tailwind CSS'],
    techBackend: ['NestJS', 'TypeORM', 'MySQL', 'Vertex AI (Gemini)'],
    screenshots: [
      '01-login.webp',
      '02-siniestros-escolares-listado.webp',
      '03-siniestros-automovilisticos-listado.webp',
      '04-alta-ocr-vertex-ai.webp',
      '05-alta-ocr-vertex-ai-vehiculo-terceros.webp',
      '06-detalle-auto-identificacion.webp',
      '07-detalle-auto-terceros.webp',
      '08-detalle-auto-investigacion.webp',
      '09-detalle-auto-archivos-carga.webp',
      '10-detalle-acta-escolar.webp',
      '11-detalle-acta-checklist-documentacion.webp',
      '12-carga-publica-paso1-datos.webp',
      '13-carga-publica-paso2-documentacion.webp',
    ],
  },
  {
    slug: 'workshop-management-system',
    techFrontend: ['Vue 3', 'Vue Router', 'Vuetify'],
    techBackend: ['LoopBack 4'],
    screenshots: [
      '01-dashboard.webp',
      '02-nuevo-arreglo-particular.webp',
      '03-listado-arreglos-particulares.webp',
      '04-nuevo-arreglo-empresa.webp',
      '05-listado-arreglos-empresas.webp',
      '06-listado-marcas.webp',
      '07-listado-vehiculos-particulares.webp',
      '08-listado-vehiculos-empresas.webp',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
