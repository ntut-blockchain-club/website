import "./index.scss";
import Images from "../../assets/images/lecture_images";
function End_lecture() {
  return (
    <div className="end_lecture_container">
      <div className="title">
        <h1>以往課程</h1>
        <h1>Previous Lecture</h1>
      </div>
      <Images />
    </div>
  );
}

export default End_lecture;
