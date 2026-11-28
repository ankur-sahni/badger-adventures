import { Fragment } from "react";

type SplitWordsProps = {
  text: string;
  delay?: number;
  step?: number;
};

// Each word rises out of its own mask; the text stays plain inline content for screen readers.
export function SplitWords({ text, delay = 0, step = 70 }: SplitWordsProps) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      {index > 0 && " "}
      <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
        <span className="rise-word inline-block" style={{ animationDelay: `${delay + index * step}ms` }}>
          {word}
        </span>
      </span>
    </Fragment>
  ));
}
