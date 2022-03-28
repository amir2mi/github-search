import clsx from "clsx";
import "./style.scss";

interface ButtonProps {
  [key: string]: any;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { className, onClick, ...rest } = props;

  return <button {...rest} className={clsx("button", className)} onClick={onClick} />;
}
