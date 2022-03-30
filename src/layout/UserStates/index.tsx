import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Users, Folder, Feather } from "react-feather";
import { storeProps } from "../../store";
import "./style.scss";

export default function UserStates() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const user = username && cachedUsers[username];

  return (
    <div className="user-states flex-center">
      <div className="state">
        <Users /> {user.followers} Followers
      </div>
      <div className="state">
        <Users /> {user.following} Following
      </div>
      <div className="state">
        <Folder /> {user.public_repos} Public Repos
      </div>
      <div className="state">
        <Feather /> {user.public_gists} Public Gists
      </div>
    </div>
  );
}
