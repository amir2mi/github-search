import { useState } from "react";
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

  // use local value to save and display the search box value
  // onSubmit use this value and update Redux store
  const [localValue, setLocalValue] = useState("");

  const clearInput = () => {
    setLocalValue("");
    dispatch(setSearchValue({ value: "" }));
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue({ value: localValue }));
  };

  return (
    <form className="search-box" onSubmit={(e) => handleOnSubmit(e)}>
      <div className={clsx("search-bar", "flex-center", localValue && "has-value")}>
        {localValue && (
          <Button className="clear-button anim-pop-in" onClick={clearInput}>
            <X />
          </Button>
        )}
        <Input value={localValue} placeHolder="Enter Username" onChange={(value) => setLocalValue(value)} />
        <Button className="search-button">
          <Search />
        </Button>
      </div>
    </form>
  );
}
