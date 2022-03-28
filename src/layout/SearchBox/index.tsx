import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { setSearchValue } from "../../store/searchSlice";
import { Input } from "../../components";
import "./style.scss";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: storeProps) => state.search.value);

  return (
    <div className="search-box flex-center">
      <Input value={searchValue} onChange={(value) => dispatch(setSearchValue({ value }))} />
      
    </div>
  );
}
