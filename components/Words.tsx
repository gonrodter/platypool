import { createElement, type ReactNode } from "react";

type Props = {
  /** Wrap a word in *asterisks* to set it in the italic accent face. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Marks the block for the word-by-word reveal in Reveal.tsx. */
  animate?: boolean;
};

/**
 * Splits a line into words so each can be revealed on its own. Line breaks are
 * written as "/" in the source string.
 */
export default function Words({
  text,
  as = "h2",
  className = "",
  animate = true,
}: Props) {
  const nodes: ReactNode[] = [];

  text.split(/\s+/).forEach((token, i) => {
    if (token === "/") {
      nodes.push(<br key={`br-${i}`} />);
      return;
    }

    // *word* may carry punctuation outside the marks: *une*. or («*une*»)
    const marked = token.match(/^(.*?)\*(.+?)\*(.*)$/);

    nodes.push(
      marked ? (
        <span key={i} className="word">
          {marked[1]}
          <span className="accent">{marked[2]}</span>
          {marked[3]}
        </span>
      ) : (
        <span key={i} className="word">
          {token}
        </span>
      ),
      " ",
    );
  });

  return createElement(
    as,
    { className, ...(animate ? { "data-words": "" } : {}) },
    nodes,
  );
}
