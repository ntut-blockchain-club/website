import "./index.scss";
import Images from "../../assets/images/lecture_images";
function End_lecture() {
  return (
    <div className="end_lecture_container">
      <div className="title">
        <h1>以往課程</h1>
        <h1>Previous Lecture</h1>
      </div>
      <p >按學期與課程時間排序</p>
      <Images />
    </div>
  );
}

export default End_lecture;
