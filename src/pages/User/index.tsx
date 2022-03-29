import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeProps } from "../../store";
import config from "../../config";
import UserInfo from "../../layout/UserInfo";
import { Container } from "../../components";

export default function UserPage() {
  const dispatch = useDispatch();
  const { cachedUsers, isLoading } = useSelector((state: storeProps) => state.users);
  const { username } = useParams();

  useEffect(() => {
    dispatch({
      type: "callApi",
      payload: {
        url: `${config.apiBaseURL}${config.apiUserProfile}/${username}`,
        onStart: "users/enableLoading",
        onSuccess: "users/cacheUser",
      },
    });
  }, [dispatch, username]);

  return (
    <Container size="lg">
      {isLoading && "Loading"}
      {username && cachedUsers[username] && <UserInfo />}
    </Container>
  );
}
