import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storeProps } from "../../store";
import { FakeUserBox, NoResult, UserBox } from "../../components";
import "./style.scss";

export default function SearchResult() {
  const { isLoading, items, resultCount, value } = useSelector((store: storeProps) => store.search);

  return (
    <section className="search-result">
      {isLoading
        ? [...new Array(6)].map((_, index) => <FakeUserBox key={index} className="result-item" />)
        : items?.length > 0
        ? items.map(({ login, avatar_url }) => (
            <Link key={login} to={`/user/${login}`} className="result-item">
              <UserBox imageShadow={true} avatar={avatar_url} name={login} />
            </Link>
          ))
        : resultCount === 0 && <NoResult value={value} />}
    </section>
  );
}
