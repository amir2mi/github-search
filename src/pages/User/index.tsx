import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeProps } from "../../store";
import config from "../../config";
import UserInfo from "../../layout/UserInfo";
import UserStates from "../../layout/UserStates";
import { Container, Loading } from "../../components";
import { disableLoading } from "../../store/users";

export default function UserPage() {
  const dispatch = useDispatch();
  const { cachedUsers, isLoading } = useSelector((state: storeProps) => state.users);
  const { username } = useParams();

  useEffect(() => {
    if (username && cachedUsers[username]) {
      dispatch(disableLoading());
      return;
    }

    // get user info
    dispatch({
      type: "callApi",
      payload: {
        url: `${config.apiBaseURL}${config.apiUserProfile}/${username}`,
        onStart: "users/enableLoading",
        onSuccess: "users/cacheUser",
      },
    });

    // get user repositories
    dispatch({
      type: "callApi",
      payload: {
        url: `${config.apiBaseURL}${config.apiUserProfile}/${username}/repos`,
        onStart: "users/enableLoading",
        onSuccess: "users/cacheUserRepos",
        additionalInfo: { username },
      },
    });
  }, [cachedUsers, dispatch, username]);

  return (
    <Container size="lg">
      {isLoading && <Loading className="fixed-loading" />}
      {username && cachedUsers[username] && (
        <>
          <UserInfo />
          <UserStates />
        </>
      )}
    </Container>
  );
}
