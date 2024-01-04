import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "reactstrap";
import Karakter from "./Karakter";

export default function Karakterler(props) {
  const [open, setOpen] = useState("1");
  const { characters } = props;
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        {characters.map((item, index) => {
          return <Karakter key={index} id={index} character={item} />;
        })}
      </Accordion>
    </div>
  );
}
