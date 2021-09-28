import "./index.scss";
function NewDiscList(porps) {
  const { newDiscList } = porps;

  const discItem = (data) => {
    return (
      <div className="disc-box" key={data.id}>
        <div className="disc-div">
          <img src="#" alt="sdsd" />
          <div className="img">sdadsads</div>
        </div>
        <div>文本</div>
      </div>
    );
  };
  return (
    <div className="new-disc">
      <div>
        {newDiscList &&
          [0, 1].map((item) => {
            return (
              <div key={item}>
                {newDiscList &&
                  newDiscList.slice(item * 5, (item + 1) * 5).map((item2) => {
                    return discItem(item2);
                  })}
              </div>
            );
          })}
      </div>
      {/* <div>left</div>
      <div>right</div> */}
    </div>
  );
}

export default NewDiscList;
