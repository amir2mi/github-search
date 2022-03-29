import { GitHub } from "react-feather";
import "./style.scss";

export default function Logo() {
  return (
    <div className="site-logo flex-center">
      <GitHub className="icon" />
      <h1 className="title">GitHub Search</h1>
    </div>
  );
}
