function Kart({ description, title, isCompleted }) {
    let time = new Date().toLocaleDateString();
    return (

        <div className="kart" style={
            {
                border: "1px solid black",
                width: "400px",
                height: "200px",
                display: "flex",
                flexDirection: "row",
                borderRadius: "10px",
                backgroundColor: isCompleted ? "Green" : "Red"
            }}>
            <div className="kartleft" style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
            }}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="kartright" style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "5px"
            }}>
                <h2>{time}</h2>
                {isCompleted ? <></> : <button style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "5px",
                    border: "1px solid black"
                }}>Onayla</button>}
            </div>
        </div>
    )
}

export default Kart



