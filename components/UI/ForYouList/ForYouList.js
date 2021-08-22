const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 1; index <= digit; index++) {
      thumbnails.push(comp);
    }

    return thumbnails;
  };

  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You List</h3>
      <div className="foryou-list__thumbnails">
        {loopComp(
          <div className="foryou-list__thumbnail">
            <img src="https://c.shld.net/rpx/i/s/pi/mp/10160405/prod_9273366732?src=http%3A%2F%2Flyimage.club%2Fimages%2FimageC%2FALVB01HUGZ9G6.jpg&d=7f28b98f885bebaa7ec40fff3dcf191ffe53f6a0&" />

            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;
