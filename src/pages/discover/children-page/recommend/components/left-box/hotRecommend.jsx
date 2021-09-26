import "./index.scss";
import { useEffect } from "react";
import ThemeHeader from "@/components/theme-header";
import PlayList from "./playList";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistAction } from "@/store/recommend/creatorAction";
function HotRecommend(props) {
  const tabs = ["华语", "流行", "摇滚", "民谣", "电子"];

  const dispatch = useDispatch();
  const { recommendPlaylist } = useSelector((state) => state.recommendReducer);

  useEffect(() => {
    dispatch(getPlaylistAction({ limit: 8 }));
  }, [dispatch]);

  console.log(recommendPlaylist);
  return (
    <>
      <ThemeHeader title={"热门推荐"} tabs={tabs} />
      <PlayList recommendPlaylist={recommendPlaylist} />
    </>
  );
}

export default HotRecommend;
