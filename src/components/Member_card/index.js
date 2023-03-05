import "./index.scss"
function Member_card(props) {
   return (
        <div className="member_container">
            <div className="member_card">
                <img className="member_image" src={require(`../../assets/images/crews_images/${props.member_name}.jpg`)} alt="member_image" />
                <h2>{props.title}</h2>
                <h3>{props.name}</h3>
                <p>
                    {props.discription}
                </p>
                </div>
        </div>
    );
}

export default Member_card;