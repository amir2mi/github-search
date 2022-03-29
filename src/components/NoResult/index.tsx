import { Frown } from "react-feather";

import "./style.scss";

interface NoResultProps {
  value: string;
}

export default function NoResult({ value }: NoResultProps) {
  return (
    <div className="no-result-message flex-center anim-rise-in">
      <Frown className="icon" />
      <h3 className="title">No results for "{value}"</h3>
    </div>
  );
}
