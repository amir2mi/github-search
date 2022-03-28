import clsx from "clsx";
import "./style.scss";

interface InputProps {
  [key: string]: any;
  onChange: (value: string) => void;
}

export default function Input(props: InputProps) {
  const { className, onChange, ...rest } = props;
  return <input {...rest} className={clsx("input-box", className)} onChange={(e) => onChange(e.target.value)} />;
}
