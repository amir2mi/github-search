import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { RepositoryBox } from "../../components";
import "./style.scss";

interface RepoProps {
  name: string;
  description: string;
  homepage: string;
  html_url: string;
  license: { name: string };
  stargazers_count: number;
  topics: string[];
}

export default function UserRepos() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const user = username && cachedUsers[username];

  return (
    <div className="user-repos">
      {user.repos &&
        user.repos.length > 0 &&
        user.repos.map(({ name, description, homepage, license, html_url, stargazers_count, topics }: RepoProps) => (
          <RepositoryBox
            className="anim-rise-in"
            key={name}
            description={description}
            homepage={homepage}
            license={(license && license.name) || "Unknown"}
            name={name}
            topics={topics}
            stars={stargazers_count}
            url={html_url}
          />
        ))}
    </div>
  );
}
