import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Optimizing Websites',

 Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default, 

    description: (
      <>
       Optimizing websites is critical. Website designs need to ensure pages load quickly and display correctly, on a variety of devices and screen sizes. The website look and feel, users experience, and functionality need to be consistence.


      </>
    ),
  },
  {
    title: 'Reducing Cost',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Defect remediation costs during the lifetime of websites may be many times the cost of developing them. The culprit is not detecting website defects early in development stages.
      </>
    ),
  },
  {
    title: 'Web  Component Era',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Web Components are independent and reusable pieces of code to creating new customs components. Web components are based on existing web standards. They enable web developers to encapsulated styling and custom behavior.     
</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
