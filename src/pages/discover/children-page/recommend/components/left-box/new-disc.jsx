import "./index.scss";
import ThemeHeader from "@/components/theme-header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewDiscAction } from "@/store/recommend/creatorAction";
import NewDiscList from "./disc";

function NewDisc() {
  const dispatch = useDispatch();
  const { newDiscList } = useSelector((state) => state.recommendReducer);

  useEffect(() => {
    dispatch(getNewDiscAction());
  }, [dispatch]);

  return (
    <>
      <ThemeHeader title={"新碟上架"} />
      <NewDiscList newDiscList={newDiscList} />
    </>
  );
}

export default NewDisc;
