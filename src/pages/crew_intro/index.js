import "./index.scss";
import MemberCard from "../../components/MemberCard";
function Crew_intro() {
  return (
    <div className="crew_container">
      <div className="text">
        <h1>團隊成員</h1>
        <h1>Crew Member</h1>
        <div className="member_card_container">
          <MemberCard
            imgName="kevin"
            title="社長"
            name="Kevin"
            // discription="北科大 土木工程系"
          />
          <MemberCard
            imgName="martha"
            title="副社長"
            name="瑪莎"
            // discription="北科大 資訊與財金管理系"
          />
        </div>
        <div className="member_card_container">
          <MemberCard
            imgName="pai"
            title="活動長"
            name="Pai"
            // discription="北科大 土木工程系"
          />
          <MemberCard
            imgName="ken"
            title="技術顧問"
            name="Ken"
            // discription="北科大 資訊與財金管理系"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew_intro;
