import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';

import { Button } from '../components/ui/Button';
import { Carousel } from '../components/ui/Carousel';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Seo } from '../components/ui/Seo';
import { Tag } from '../components/ui/Tag';
import { siteConfig } from '../config/site';
import { getProjectBySlug } from '../data/projects';
import styles from './ProjectDetailPage.module.css';

interface TextBlock {
  heading: string;
  body: string;
}

interface FeatureBlock {
  heading: string;
  items: string[];
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t: tCommon } = useTranslation('common');
  const { t: tProjects } = useTranslation('projects');

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const name = tProjects(`${slug}.name`);
  const summary = tProjects(`${slug}.summary`);
  const screenshotAlts = project.screenshots
    ? (tProjects(`${slug}.screenshots`, { returnObjects: true }) as string[])
    : undefined;
  const problem = tProjects(`${slug}.problem`, { returnObjects: true }) as TextBlock;
  const architecture = tProjects(`${slug}.architecture`, { returnObjects: true }) as TextBlock;
  const features = tProjects(`${slug}.features`, { returnObjects: true }) as FeatureBlock;
  const challenges = tProjects(`${slug}.challenges`, { returnObjects: true }) as TextBlock;
  const lessonsLearned = tProjects(`${slug}.lessonsLearned`, { returnObjects: true }) as TextBlock;

  return (
    <div className={`container ${styles.page}`}>
      <Seo
        title={`${name} | ${siteConfig.name}`}
        description={summary}
        path={`/projects/${project.slug}`}
      />

      <a href="/#projects" className={styles.back}>
        ← {tCommon('buttons.backHome')}
      </a>

      <h1 className={styles.title}>{name}</h1>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.tagList}>
        {[...project.techFrontend, ...project.techBackend].map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {project.screenshots && screenshotAlts ? (
        <Carousel
          className={styles.image}
          images={project.screenshots.map((file, position) => ({
            src: `/images/projects/${project.slug}/${file}`,
            alt: screenshotAlts[position] ?? name,
          }))}
          previousLabel={tCommon('carousel.previous')}
          nextLabel={tCommon('carousel.next')}
          goToLabel={(position) => tCommon('carousel.goTo', { position })}
          counterLabel={(current, total) => tCommon('carousel.counter', { current, total })}
        />
      ) : (
        <ImagePlaceholder label={name} className={styles.image} />
      )}

      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{problem.heading}</h2>
        <p className={styles.blockBody}>{problem.body}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{architecture.heading}</h2>
        <p className={styles.blockBody}>{architecture.body}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{features.heading}</h2>
        <ul className={styles.featureList}>
          {features.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{challenges.heading}</h2>
        <p className={styles.blockBody}>{challenges.body}</p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockHeading}>{lessonsLearned.heading}</h2>
        <p className={styles.blockBody}>{lessonsLearned.body}</p>
      </section>

      {project.links && (
        <div className={styles.links}>
          {project.links.github && (
            <Button href={project.links.github} variant="secondary">
              {tCommon('buttons.sourceCode')}
            </Button>
          )}
          {project.links.demo && <Button href={project.links.demo}>{tCommon('buttons.liveDemo')}</Button>}
        </div>
      )}
    </div>
  );
}
