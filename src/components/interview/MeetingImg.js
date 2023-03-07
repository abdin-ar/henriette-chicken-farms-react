const MeetingImg = ({ img, id, openImage }) => {
  return (
    <div
      className="content-with-images-img-container"
      onClick={() => openImage(id)}
    >
      <div className="content-with-images-img-overlay">
        <i className="fas fa-search-plus"></i>
      </div>
      <img
        src={`/images/${img}`}
        alt="Henriette"
        className="content-with-images-img"
      />
    </div>
  );
};

export default MeetingImg;
