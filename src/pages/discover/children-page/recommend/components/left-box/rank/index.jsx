import "./index.scss";
import ThemeHeader from "@/components/theme-header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TopList from "@/components/topList";
import React, { memo } from "react";
import {
  getFastTopList,
  getNewSongList,
  getOriginList,
} from "@/store/recommend/creatorAction";

function Rank() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFastTopList({ id: 19723756 }));
    dispatch(getNewSongList({ id: 3779629 }));
    dispatch(getOriginList({ id: 2884035 }));
  }, [dispatch]);

  const { fastTopList, newSongTopList, originSongList } = useSelector(
    (state) => state.recommendReducer
  );
  return (
    <>
      <ThemeHeader title={"榜单"} />
      <div className="rank-box">
        <TopList data={fastTopList} />
        <TopList data={newSongTopList} />
        <TopList data={originSongList} />
      </div>
    </>
  );
}

export default memo(Rank);
