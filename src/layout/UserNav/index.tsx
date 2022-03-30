import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronLeft, Check, X } from "react-feather";
import { storeProps } from "../../store";
import "./style.scss";

export default function UserNav() {
  const { username } = useParams();
  const { cachedUsers } = useSelector((state: storeProps) => state.users);
  const user = username && cachedUsers[username];

  return (
    <div className="user-nav flex-center">
      <Link to="/" className="go-back flex-center">
        <ChevronLeft /> Back to Search
      </Link>
      <div className="hireable flex-center">
        {user.hireable ? (
          <>
            <Check /> Can Be Hired
          </>
        ) : (
          <>
            <X /> Cannot Be Hired
          </>
        )}
      </div>
    </div>
  );
}
