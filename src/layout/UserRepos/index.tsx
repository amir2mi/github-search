import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import type { User } from "../../store/users";
import { RepositoryBox } from "../../components";
import "./style.scss";

interface RepoProps {
  name: string;
  description: string;
  homepage: string;
  license: { name: string };
  html_url: string;
  topics: string[];
}

export default function UserRepos() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    if (username) {
      setUser(cachedUsers[username]);
    }
  }, [cachedUsers, username]);

  return (
    <div className="user-repos">
      {user.repos &&
        user.repos.length > 0 &&
        user.repos.map(({ name, description, homepage, license, html_url, topics }: RepoProps) => (
          <RepositoryBox
            key={name}
            description={description}
            homepage={homepage}
            license={(license && license.name) || "Unknown"}
            name={name}
            url={html_url}
            topics={topics}
          />
        ))}
    </div>
  );
}
