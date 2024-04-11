import "./Start.css";

const Start = ({ poke1, poke2 }) => {
  return (
    <div
      className="screen-show"
      style={{
        backgroundImage:
          'url("https://preview.redd.it/d9spuwer2c491.png?width=1050&format=png&auto=webp&s=9ca8c75c63da9f8bb134e955d73e2770d073375e")',
      }}
    >
      <img
        src={poke1[0].sprites.back_default}
        alt="front-default"
        className="poke-user"
      />
      <img
        src={poke2[0].sprites.front_default}
        alt="front-default"
        className="poke-comp"
      />
      {console.log(poke1, poke2)}
    </div>
  );
};

export default Start;
