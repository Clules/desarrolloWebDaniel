const PrevDescription = ({ description }) => {
  return (
    <>
      {description.map((des, idx) => (
        <div key={idx}>
          <p style={{ color: "white", fontSize: "20px" }}>{des.name}</p>
          <p style={{ color: "white", fontSize: "15px" }}>{des.descripcion}</p>
        </div>
      ))}
    </>
  );
};

export default PrevDescription;
