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
            imgName="ryan"
            title="社長"
            name="Ryan"
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
            imgName="rkun"
            title="活動長"
            name="Rkun"
            // discription="北科大 土木工程系"
          />
          <MemberCard
            imgName="orange"
            title="財務長"
            name="橙橙"
            // discription="北科大 資訊與財金管理系"
          />
          <MemberCard
            imgName="jason"
            title="公關長"
            name="Jason"
            // discription="北科大 土木工程系"
          />
          <MemberCard
            imgName="rich"
            title="學術長"
            name="桓齊"
            // discription="北科大 資工所"
          />
          <MemberCard
            imgName="ken"
            title="技術顧問"
            name="Ken"
            // discription="北科大 資訊與財金管理系"
          />
          <MemberCard
            imgName="henry"
            title="經營顧問"
            name="Henry"
            // discription="台科大 資訊工程系"
          />
        </div>
      </div>
    </div>
  );
}

export default Crew_intro;
