import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storeProps } from "../../store";
import { UserBox } from "../../components";
import "./style.scss";

export default function SearchResult() {
  const { isLoading, items, value } = useSelector((store: storeProps) => store.search);

  return items?.length > 0 ? (
    <section className="search-result">
      {items.map(({ login, avatar_url }) => (
        <Link key={login} to={`/user/${login}`} className="result-item">
          <UserBox imageShadow={true} avatar={avatar_url} name={login} />
        </Link>
      ))}
    </section>
  ) : (
    <>
      {isLoading ? (
        <h3 className="anim-fade-in text-center">Loading...</h3>
      ) : (
        <h3 className="anim-fade-in text-center">No results for "{value}"</h3>
      )}
    </>
  );
}
