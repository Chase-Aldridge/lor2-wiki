import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs">
            Enter the Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Complete D&D campaign wiki for the World of LOR">
      <HomepageHeader />
      <main style={{padding: '2rem'}}>
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <h2>Three Epic Campaigns, One World</h2>
            <p style={{fontSize: '1.1rem', lineHeight: '1.7'}}>
              Explore the complete lore, characters, factions, and stories from Kevin Orosz's
              D&D 5E campaigns set in the World of LOR. This comprehensive wiki contains every
              detail from the Aeternum Crisis, the political intrigue of Gul'Rath, and the
              savage frontier of Plagas.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
