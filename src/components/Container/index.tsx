import "./style.scss";

interface ContainerProps {
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export default function Container({ children, size }: ContainerProps) {
  return <div className={`container-${size}`}>{children}</div>;
}
