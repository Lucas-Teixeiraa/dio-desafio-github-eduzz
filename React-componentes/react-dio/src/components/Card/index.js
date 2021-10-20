import { useState } from "react";

import Button from "../button";

const Card = () => {
  const [value, setValue] = useState(0);

  function Adicionar() {
    setValue(value + 1);
  }

  function Remover() {
    setValue(value - 1);
  }
  return (
    <div className="card">
      <div className="card-header">First Card</div>
      <div className="card-body">
        <Button className="btn btn-success" onClick={Adicionar}>
          Adicionar
        </Button>
        <Button className="btn btn-danger" onClick={Remover}>
          Remover
        </Button>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
