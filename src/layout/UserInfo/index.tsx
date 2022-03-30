import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GitHub } from "react-feather";
import { storeProps } from "../../store";
import "./style.scss";

export default function UserInfo() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const user = username && cachedUsers[username];

  return (
    <div className="user-info flex-center">
      <a
        className="button github-profile"
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit GitHub profile"
      >
        <img className="avatar" src={user.avatar_url} alt={user.name} />
        <div className="on-hover">
          <GitHub size="48" />
          <p>Go to GitHub</p>
        </div>
      </a>

      <h2 className="title">{user.name || user.login}</h2>
      {user.bio && <p className="bio">{user.bio}</p>}
    </div>
  );
}
