import { Folder, GitHub, Home } from "react-feather";
import "./style.scss";

interface RepositoryBoxProps {
  description: string;
  homepage: string;
  license: string;
  name: string;
  url: string;
  topics: string[];
}

export default function RepositoryBox(props: RepositoryBoxProps) {
  const { description, homepage, license, name, url, topics } = props;

  return (
    <article className="repository-box">
      <Folder className="icon" />
      <div className="right-side">
        <div className="title-wrapper">
          <h3 className="title">{name}</h3>
          <span className="license">{license}</span>
        </div>
        <p className="description">{description}</p>
        <div className="links">
          <a href={homepage} target="_blank" className="button" rel="noreferrer">
            <Home />
            Homepage
          </a>
          <a href={url} target="_blank" className="button" rel="noreferrer">
            <GitHub />
            GitHub Page
          </a>
        </div>

        {topics.length > 0 && (
          <div className="topics">
            {topics.map((topic) => (
              <span key={topic} className="topic">
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
