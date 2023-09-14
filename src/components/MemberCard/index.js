import "./index.scss"
function MemberCard(props) {
   return (
        <div className="member_container">
            <div className="member_card">
                <img className="member_image" src={require(`../../assets/images/crews_images/${props.imgName}.webp`)} alt="member_image" />
                <h2>{props.title}</h2>
                <h3>{props.name}</h3>
                {/* <p>
                    {props.discription}
                </p> */}
                </div>
        </div>
    );
}

export default MemberCard;