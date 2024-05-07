import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
const baseURL = "https://myntraclone-backend.onrender.com";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.singal;
    fetch(`$(baseURL)/items`, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);


};

export default FetchItems;
