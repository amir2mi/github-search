import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { X, Search } from "react-feather";
import { storeProps } from "../../store";
import { setSearchValue } from "../../store/searchSlice";
import { Button, Input } from "../../components";
import "./style.scss";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: storeProps) => state.search.value);

  return (
    <div className="search-box">
      <div className={clsx("search-bar", "flex-center", searchValue && "has-value")}>
        {searchValue && (
          <Button className="clear-button anim-pop-in" onClick={() => console.log("clear")}>
            <X />
          </Button>
        )}
        <Input
          value={searchValue}
          placeHolder="Enter Username"
          onChange={(value) => dispatch(setSearchValue({ value }))}
        />
        <Button className="search-button" onClick={() => console.log("search")}>
          <Search />
        </Button>
      </div>
    </div>
  );
}
