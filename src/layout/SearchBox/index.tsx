import { useState } from "react";
import clsx from "clsx";
import { X, Search } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { setValue, clearValue, clearItems } from "../../store/search";
import config from "../../config";
import { Button, Input } from "../../components";
import "./style.scss";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: storeProps) => state.search.value);

  // use local value to save and display the search box value
  // onSubmit use this value and update Redux store
  const [localValue, setLocalValue] = useState<string>(searchValue);
  const [error, setError] = useState<string>("");

  const clearInput = () => {
    setError("");
    setLocalValue("");
    dispatch(clearValue());
    dispatch(clearItems());
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // update store with new value
    dispatch(setValue({ value: localValue }));

    // do not search if the value does not have enough characters
    if (localValue.length < 2) {
      setError("Please enter at least 2 characters");
      dispatch(clearItems());
      return;
    }

    // do not search if the search value is not changed
    if (searchValue === localValue) return;

    // do search
    dispatch({
      type: "callApi",
      payload: {
        url: config.apiBaseURL + config.apiUserSearch + localValue,
        onStart: "search/searching",
        onSuccess: "search/setItems",
      },
    });

    // clear error message
    setError("");
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
        <Input
          type="search"
          value={localValue}
          placeholder="Enter Username"
          onChange={(value) => setLocalValue(value)}
        />
        <Button type="submit" className="search-button">
          <Search />
        </Button>
      </div>
      {error && <div className="error-message anim-rise-in">{error}</div>}
    </form>
  );
}
