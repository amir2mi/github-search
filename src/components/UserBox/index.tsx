import "./style.scss";

interface UserBoxProps {
  avatar: string;
  name: string;
  imageShadow?: boolean;
  username: string;
}

export default function UserBox({ avatar, imageShadow, name, username }: UserBoxProps) {
  return (
    <div className="user-box">
      <figure className="avatar-wrapper">
        {imageShadow && <img src={avatar} alt={name} className="avatar-shadow" />}
        <img src={avatar} alt={name} className="avatar" />
      </figure>
      <h3 className="title">{name}</h3>
    </div>
  );
}
