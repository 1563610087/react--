import React from "react";
import { Redirect } from "react-router-dom";

const Discover = React.lazy(() => import("@/pages/discover"));
const routes = [
  { path: "/", exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: "/discover",
    component: Discover,
    // routes: [
    //   {
    //     path: "/discover",
    //     exact: true,
    //     render: () => <Redirect to="/discover/recommend" />,
    //   },
    //   { path: "/discover/recommend", component: JMRecommend },
    //   { path: "/discover/ranking", component: JMToplist },
    //   {
    //     path: "/discover/ranking",
    //     component: JMToplist,
    //   },
    //   { path: "/discover/album", component: JMAlbum },
    //   { path: "/discover/djradio", component: JMDjradio },
    //   { path: "/discover/artist", component: JMArtist },
    //   { path: "/discover/songs", component: JMSongs },
    //   { path: "/discover/song", component: JMSongDetail },
    // ],
  },
];

export default routes;
