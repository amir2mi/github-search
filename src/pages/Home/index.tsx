import { Container } from "../../components";
import SearchBox from "../../layout/SearchBox";
import SearchResult from "../../layout/SearchResult";

export default function HomePage() {
  return (
    <Container size="lg">
      <SearchBox />
      <SearchResult />
    </Container>
  );
}
