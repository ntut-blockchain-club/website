import "./index.scss";
import Member_card from "../../components/Member_card";
function Crew_intro() {
  return (
    <div className="crew_container">
      <div className="text">
        <h1>團隊成員</h1>
        <h1>Crew Member</h1>
        <div className="member_card_container">
          <Member_card
            member_name="ken"
            title="社長"
            name="Ken"
            discription="朝全端開發者前進中。"
          />
          <Member_card
            member_name="calvin"
            title="副社長"
            name="Calvin"
            discription="輔仁大學意大利文系"
          />
          <Member_card
            member_name="east"
            title="幹部"
            name="東東"
            discription="輔仁大學"
          />
          <Member_card
            member_name="ke"
            title="幹部"
            name="小柯"
            discription="台科大"
          />
          <Member_card
            member_name="rich"
            title="幹部"
            name="桓齊"
            discription="北科大資工所"
          />
          <Member_card
            member_name="trillion"
            title="幹部"
            name="兆宜"
            discription="北科大資財所"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew_intro;
