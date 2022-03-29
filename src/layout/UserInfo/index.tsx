import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GitHub } from "react-feather";
import { storeProps } from "../../store";
import type { User } from "../../store/users";
import "./style.scss";

export default function UserInfo() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    if (username) {
      setUser(cachedUsers[username]);
    }
  }, [cachedUsers, username]);

  return (
    <div className="user-info flex-center">
      <img className="avatar" src={user.avatar_url} alt={user.name} />
      <div className="title-wrapper flex-center">
        <h2 className="title">{user.name}</h2>
        <a
          className="button github-profile"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          aria-label="Go to GitHub profile"
        >
          <GitHub />
        </a>
      </div>
      <p className="username">{user.login}</p>

      <p className="bio">{user.bio}</p>
    </div>
  );
}
