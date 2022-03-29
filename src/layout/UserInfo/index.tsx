import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import type { User } from "../../store/users";
import { Button } from "../../components";
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
    <div className="user-info">
      <img src={user.avatar_url} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <Button type="primary">GitHub Profile</Button>
    </div>
  );
}
