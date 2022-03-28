import "./style.scss";

interface InputProps {
  [key: string]: any;
  onChange: (value: string) => void;
}

export default function Input(props: InputProps) {
  const { onChange, ...rest } = props;
  return <input {...rest} className="input-box" onChange={(e) => onChange(e.target.value)} />;
}
