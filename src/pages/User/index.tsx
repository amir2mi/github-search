import { useParams } from "react-router-dom";
import { Container } from "../../components";

export default function UserPage() {
  const { username } = useParams();

  return <Container size="lg">{username}</Container>;
}
