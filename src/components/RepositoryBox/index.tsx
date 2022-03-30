import { Folder, GitHub, Home, Star } from "react-feather";
import clsx from "clsx";
import "./style.scss";

interface RepositoryBoxProps {
  [key: string]: any;
  description: string;
  homepage: string;
  license: string;
  name: string;
  topics: string[];
  stars: number;
  url: string;
}

export default function RepositoryBox(props: RepositoryBoxProps) {
  const { className, description, homepage, license, name, stars, topics, url } = props;

  return (
    <article className={clsx("repository-box", className)}>
      <Folder className="icon" />
      <div className="right-side">
        <div className="title-wrapper">
          <h3 className="title">{name}</h3>
          <div className="title-info">
            <span className="stars flex-center">
              <Star />
              {stars}
            </span>
            <span className="license">{license}</span>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="links">
          {url && (
            <a href={url} target="_blank" className="button" rel="noreferrer">
              <GitHub />
              GitHub Page
            </a>
          )}
          {homepage && (
            <a href={homepage} target="_blank" className="button" rel="noreferrer">
              <Home />
              Homepage
            </a>
          )}
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
