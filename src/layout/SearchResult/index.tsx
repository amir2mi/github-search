import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storeProps } from "../../store";
import { UserBox } from "../../components";
import "./style.scss";

export default function SearchResult() {
  const { isLoading, items, resultCount, value } = useSelector((store: storeProps) => store.search);

  return items?.length > 0 ? (
    <section className="search-result">
      {items.map(({ login, avatar_url }) => (
        <Link key={login} to={`/user/${login}`} className="result-item">
          <UserBox imageShadow={true} avatar={avatar_url} name={login} />
        </Link>
      ))}
    </section>
  ) : isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <>{resultCount === 0 && <h3 className="text-center anim-fade-in">No results for "{value}"</h3>}</>
  );
}
