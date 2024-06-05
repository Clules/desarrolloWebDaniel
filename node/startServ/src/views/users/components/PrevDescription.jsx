import ReactCardCarousel from "react-card-carousel";

const PrevDescription = ({ descriptions }) => {
  console.log(descriptions);
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {descriptions.length === 0 ? (
          <div
            style={{
              width: "250px",
              height: "150px",
              backgroundColor: "gray",
              borderRadius: "10px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              margin: "10px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            No hay descripciones previas aún!
            <br />
            Agrega una nueva!
          </div>
        ) : (
          <ReactCardCarousel spread={"wide"} disable_box_shadow={true}>
            {descriptions.map((des, idx) => (
              <div
                key={idx}
                style={{
                  width: "250px",
                  height: "150px",
                  backgroundColor: "gray",
                  borderRadius: "10px",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    margin: "0 0 5px 0",
                  }}
                >
                  Descripcion:
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                    margin: "0 0 5px 0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                  }}
                >
                  {des.description}
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "15px",
                    margin: "0 0 5px 0",
                  }}
                >
                  Prescription
                </p>
                <p
                  style={{
                    color: "white",
                    fontSize: "10px",
                    margin: "0 0 5px 0",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                  }}
                >
                  {des.prescription}
                </p>
              </div>
            ))}
          </ReactCardCarousel>
        )}
      </div>
    </>
  );
};

export default PrevDescription;
