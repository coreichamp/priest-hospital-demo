import React from "react";

import { Button, Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function SlideCard({ img, onDelete }) {
  return (
    <div style={{ padding: 10 }}>
      <Card style={{ width: "20rem", position: "relative" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ position: "relative", width: 320, height: 180 }}
        />
        <div style={{ position: "absolute", right: 15, bottom: 15 }}>
          <Button
            onClick={onDelete}
            variant="danger"
            style={{
              width: 30,
              height: 30,
              padding: "6px 0px",
              borderRradius: 1,
              fontSize: 15,
              lineHeight: 1,
              textAlign: "center"
            }}
          >
            <FaTrashAlt />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SlideCard;
