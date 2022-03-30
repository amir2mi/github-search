import { useEffect } from "react";
import { Container } from "../../components";
import SearchBox from "../../layout/SearchBox";
import SearchResult from "../../layout/SearchResult";

export default function HomePage() {
  useEffect(() => {
    document.title = `GitHub Search`;
  }, []);

  return (
    <Container size="lg">
      <SearchBox />
      <SearchResult />
    </Container>
  );
}
