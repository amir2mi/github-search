import { Frown } from "react-feather";

import "./style.scss";

interface NoResultProps {
  value: string;
}

export default function NoResult({ value }: NoResultProps) {
  return (
    <div className="no-result-message flex-center">
      <Frown className="icon" />
      <h3 className="title anim-fade-in">No results for "{value}"</h3>
    </div>
  );
}
