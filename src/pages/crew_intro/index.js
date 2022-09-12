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
            member_name="ken"
            title="社長"
            name="Ken"
            discription="社長"
          />
          <Member_card
            member_name="ken"
            title="社長"
            name="Ken"
            discription="社長"
          />
          <Member_card
            member_name="ken"
            title="社長"
            name="Ken"
            discription="社長"
          />
          <Member_card
            member_name="ken"
            title="社長"
            name="Ken"
            discription="社長"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew_intro;
