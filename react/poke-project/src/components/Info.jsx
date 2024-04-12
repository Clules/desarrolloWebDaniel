import "./Info.css";

const Info = ({ setInfoM }) => {
  console.log("info 2");
  const changeInfo = () => {
    setInfoM(false);
  };

  return (
    <div className="screen-show-info">
      <p className="texto-info1">Info</p>
      <p className="texto-info2">
        This gameboy was design to play pokemon completely arranged, you will
        always win
      </p>
      <button
        className="button-back"
        onClick={() => {
          changeInfo();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Info;
