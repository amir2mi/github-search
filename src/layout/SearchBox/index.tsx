import { useDispatch, useSelector } from "react-redux";
import { Search } from "react-feather";
import { storeProps } from "../../store";
import { setSearchValue } from "../../store/searchSlice";
import { Button, Input } from "../../components";
import "./style.scss";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: storeProps) => state.search.value);

  return (
    <div className="search-box">
      <div className="search-bar flex-center">
        <Input value={searchValue} onChange={(value) => dispatch(setSearchValue({ value }))} />
        <Button className="search-button" onClick={() => console.log("search")}>
          <Search />
        </Button>
      </div>
    </div>
  );
}
