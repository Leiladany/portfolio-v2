import { Fragment } from "react";
import type { TextSegment } from "../../data/types";

type FormattedTitleProps = {
  segments: readonly TextSegment[];
};

export function FormattedTitle({ segments }: FormattedTitleProps) {
  return (
    <>
      {segments.map((segment, index) => (
        <Fragment key={`${segment.text}-${index}`}>
          {segment.highlight ? (
            <span className="text-rose">{segment.text}</span>
          ) : (
            segment.text
          )}
          {segment.lineBreakAfter ? <br /> : null}
        </Fragment>
      ))}
    </>
  );
}
