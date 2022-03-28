import clsx from "clsx";
import "./style.scss";

interface ButtonProps {
  [key: string]: any;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { className, ...rest } = props;

  return <button {...rest} className={clsx("button", className)} />;
}
