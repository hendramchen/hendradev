import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { BookOpen, Layers, Zap } from "lucide-react";

type FeatureItem = {
  title: string;
  Svg: React.ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Guided Learning Paths",
    Svg: <BookOpen />,
    description: (
      <>
        Master complex topics through step-by-step tutorials that prioritize
        clarity and logical progression. No fluff, just actionable knowledge.
      </>
    ),
  },
  {
    title: "The Best of the Web, Refined",
    Svg: <Layers />,
    description: (
      <>
        I sift through the noise to bring you high-signal insights from global
        sources, professionally edited for maximum readability and impact.
      </>
    ),
  },
  {
    title: "Battle-Tested Perspectives",
    Svg: <Zap />,
    description: (
      <>
        Skip the theory. Dive into deep-dive articles born from real-world
        projects, failures, and successes in the field.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{Svg}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
