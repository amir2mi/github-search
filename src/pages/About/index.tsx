import { useEffect } from "react";
import { Container } from "../../components";

export default function AboutPage() {
  useEffect(() => {
    document.title = `About`;
  }, []);
``
  return (
    <Container size="lg">
      <h2>About Page</h2>
      <p>Search and discover GitHub users easily.</p>
      <p>This app is built with React and using Redux to cache results.</p>
      <a href="https://github.com/amir2mi/" target="_blank" rel="noreferrer">
        Follow the developer on GitHub
      </a>
    </Container>
  );
}
