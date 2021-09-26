import "./index.scss";

function PlayList(props) {
  const { recommendPlaylist } = props;

  const imgItem = (item) => {
    return (
      <div className="img-box" key={item.id}>
        <img src={item.picUrl} alt={item.name} />
        <div className="text-name">{item.name}</div>
      </div>
    );
  };

  return (
    <div className="cover-wrapper">
      {recommendPlaylist &&
        recommendPlaylist.map((item, index) => imgItem(item))}
    </div>
  );
}

export default PlayList;
