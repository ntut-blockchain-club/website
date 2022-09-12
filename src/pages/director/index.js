import "./index.scss";
import Member_card from "../../components/Member_card";

import daaab from "../../assets/images/daaab.jpeg";
function Directors() {
  return (
    <div className="directors_container">
      <div className="text">
        <h1>顧問與歷任社長</h1>
        <h1>Consultant and Past Presidents</h1>
        <div className="director_card_container">
          <div className="director">
            <img src={daaab} alt="" />
            <div className="director_info">
              <h2>顧問</h2>
              <h2>葛如鈞 <sub>寶博士</sub></h2>
              <p>
                歷史是共創，社會是共識；當然，也可能反過來。社團是社會的縮影，也是共創與共識，最後放大到整個宇宙。見自己，見天地，見眾生；建自己，建天地，建眾生；元節點，元網路，元宇宙。
              </p>
            </div>
          </div>
          <div className="director">
            <img src={daaab} alt="" />
            <div className="director_info">
              <h2>第一任社長</h2>
              <h2>黃宥維</h2>
              <p>
                abcdefg
              </p>
            </div>
          </div>
          <div className="director">
            <img src={daaab} alt="" />
            <div className="director_info">
              <h2>第二任社長</h2>
              <h2>黃宥維</h2>
              <p>
                abcdefg
              </p>
            </div>
          </div>
          <div className="director">
            <img src={daaab} alt="" />
            <div className="director_info">
              <h2>第三任社長</h2>
              <h2>黃宥維</h2>
              <p>
                abcdefg
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directors;
