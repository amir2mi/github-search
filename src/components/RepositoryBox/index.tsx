import { Folder } from "react-feather";
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
        <h3 className="title">{name}</h3>
        <p className="description">{description}</p>
        <a href={homepage} target="_blank" className="button" rel="noreferrer">
          Homepage
        </a>
        <a href={url} target="_blank" className="button" rel="noreferrer">
          GitHub Page
        </a>
        <span className="license">{license}</span>
        {topics.length > 0 &&
          topics.map((topic) => (
            <span key={topic} className="topic">
              {topic}
            </span>
          ))}
      </div>
    </article>
  );
}
