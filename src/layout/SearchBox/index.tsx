import { useState } from "react";
import clsx from "clsx";
import { X, Search } from "react-feather";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/search";
import { Button, Input } from "../../components";
import "./style.scss";

export default function SearchBox() {
  const dispatch = useDispatch();

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
    <form className="search-box anim-rise-in-delay" onSubmit={(e) => handleOnSubmit(e)}>
      <h2 className="title">Discover Github Users</h2>
      <div className={clsx("search-bar", "flex-center", localValue && "has-value")}>
        {localValue && (
          <Button type="reset" className="clear-button anim-pop-in" onClick={clearInput}>
            <X />
          </Button>
        )}
        <Input value={localValue} placeholder="Enter Username" onChange={(value) => setLocalValue(value)} />
        <Button type="submit" className="search-button">
          <Search />
        </Button>
      </div>
    </form>
  );
}
