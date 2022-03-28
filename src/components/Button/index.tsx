import "./style.scss";

interface ButtonProps {
  [key: string]: any;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const { onClick, ...rest } = props;

  return <button {...rest} className="button" onClick={onClick} />;
}
