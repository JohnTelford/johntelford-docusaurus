import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Optimizing Websites',

 Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default, 

    description: (
      <>
        Creating and maintaining websites that meet users needs can be difficult, complex, time consuming, and costly.  More than half of mobile user will leave a website that takes longer than 3 seconds to load and may never return. Optimizing websites is minimizing costs and maximizing performance 


      </>
    ),
  },
  {
    title: 'Reducing Cost',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Defect remediation costs during the life-time of websites may be several times the cost of development. The culprit is not detecting website defects and remediating them
      </>
    ),
  },
  {
    title: 'Web  Component Era',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Web Components are independent and reusable pieces of code to creat new components. Web components are based on existing web standards. They enable web developers to encapsulated styling and custom behavior.     
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
