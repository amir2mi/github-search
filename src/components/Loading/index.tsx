import clsx from "clsx";
import { Loader } from "react-feather";
import "./style.scss";

interface LoadingProps {
  [key: string]: any;
  className?: string;
  size?: number;
}

export default function Loading({ className, size, ...rest }: LoadingProps) {
  return (
    <div className="loading-wrapper">
      <Loader {...rest} className={clsx("loading", "anim-turn-linear", className)} size={size || 48} />
    </div>
  );
}
