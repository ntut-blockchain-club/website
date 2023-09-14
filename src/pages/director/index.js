import "./index.scss";
import MemberCard from "../../components/MemberCard";

import daaab from "../../assets/images/directors/daaab.webp";
import kmori from "../../assets/images/directors/kmori.webp";
import erina from "../../assets/images/directors/erina.webp";
import grapefruit from "../../assets/images/directors/grapefruit.webp";
import ken from "../../assets/images/directors/ken.webp";

function Directors() {
  return (
    <div className="directors_container">
      <div className="text">
        <h1>顧問與歷任社長</h1>
        <h1>Consultant and Previous Presidents</h1>
        <div className="director_card_container">
          <div className="director">
            <img src={daaab} alt="" />
            <div className="director_info">
              <h2>顧問</h2>
              <h2>
                葛如鈞 <sub>寶博士</sub>
              </h2>
              <p>
                歷史是共創，社會是共識；<br />當然，也可能反過來。<br />
                社團是社會的縮影，<br />也是共創與共識，<br />最後放大到整個宇宙。<br />
                見自己，見天地，見眾生；<br />建自己，建天地，建眾生；<br />元節點，元網路，元宇宙。
              </p>
            </div>
          </div>
          <div className="director">
            <img src={erina} alt="" />
            <div className="director_info">
              <h2>第一任社長</h2>
              <h2>陳又萍</h2>
              <p>
                Hello, consensus! <br />
                區塊鏈的世界大門已經敞開
                <br />
                歡迎加入！
                <br />
                不管你是誰、什麼角色、什麼切入點
                <br />
                都會是重要的節點之一
                <br />
                一起來好好體驗「共識」
                <br />
              </p>
            </div>
          </div>
          <div className="director">
            <img src={kmori} alt="" />
            <div className="director_info">
              <h2>第二任社長</h2>
              <h2>張凱森</h2>
              <p>
                別人恐懼我貪婪
                <br />
                別人小虧我破產
                <br />
                又虧錢了嗎？別擔心
                <br />
                只要想想薩爾瓦多總統
                <br />
                想想幣安創辦人趙長鵬
                <br />
                心情就會好起來了
                <br />
              </p>
            </div>
          </div>
          <div className="director">
            <img src={grapefruit} alt="" />
            <div className="director_info">
              <h2>第三任社長</h2>
              <h2>黃宥維</h2>
              <p>
                人類社會就如同區塊鏈的共識，<br />在不同的想法中遵循最長鏈原則；<br />
                金融效率、免於信任、保障隱私，<br />必定是人類社會未來發展的趨勢。<br />
              </p>
            </div>
          </div>
          <div className="director">
            <img src={ken} alt="" />
            <div className="director_info">
              <h2>第四任社長</h2>
              <h2>梁富財 <sub>Ken</sub></h2>
              <p>
                BUIDL together, <br />
                BUIDL for our future. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directors;
