import { useTranslation } from 'react-i18next';

import { Button } from '../../ui/Button';
import { ImagePlaceholder } from '../../ui/ImagePlaceholder';
import { Section } from '../../ui/Section';
import { Tag } from '../../ui/Tag';
import { projects } from '../../../data/projects';
import styles from './FeaturedProjects.module.css';

export function FeaturedProjects() {
  const { t: tCommon } = useTranslation('common');
  const { t: tHome } = useTranslation('home');
  const { t: tProjects } = useTranslation('projects');

  return (
    <Section
      id="projects"
      heading={tHome('projectsSection.heading')}
      subtitle={tHome('projectsSection.subtitle')}
    >
      <div className={styles.grid}>
        {projects.map((project) => {
          const name = tProjects(`${project.slug}.name`);
          return (
            <article key={project.slug} className={styles.card}>
              {project.screenshots?.[0] ? (
                <img
                  src={`/images/projects/${project.slug}/${project.screenshots[0]}`}
                  alt={name}
                  className={styles.thumbnail}
                  loading="lazy"
                />
              ) : (
                <ImagePlaceholder label={name} />
              )}
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardSummary}>{tProjects(`${project.slug}.summary`)}</p>
              <div className={styles.tagList}>
                {[...project.techFrontend, ...project.techBackend].map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
              <Button href={`/projects/${project.slug}`} variant="secondary">
                {tCommon('buttons.viewCaseStudy')}
              </Button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
