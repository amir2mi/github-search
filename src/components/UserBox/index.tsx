import clsx from "clsx";
import "./style.scss";

interface UserBoxProps {
  [key: string]: any;
  avatar: string;
  className?: string;
  imageShadow?: boolean;
  name: string;
}

export default function UserBox({ avatar, className, imageShadow, name, ...rest }: UserBoxProps) {
  return (
    <div {...rest} className={clsx("user-box", className)}>
      <figure className="avatar-wrapper">
        {imageShadow && <img src={avatar} alt={name} className="avatar-shadow" />}
        <img src={avatar} alt={name} className="avatar" />
      </figure>
      <h3 className="title">{name}</h3>
    </div>
  );
}
