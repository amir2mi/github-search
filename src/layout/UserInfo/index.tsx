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

      <h2 className="title">{user.name}</h2>
      <p className="bio">{user.bio}</p>
    </div>
  );
}
