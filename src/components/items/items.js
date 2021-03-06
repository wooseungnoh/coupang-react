import React, { useState, useEffect } from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import Item from "./item";

const Items = ({ onItems }) => {
  const [item, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:8000/item");
      if (response.ok) {
        setItems(await response.json());
      }
    };
    fetchItems();
  }, []);

  return (
    <Container
      wsize="header"
      display="df"
      style={{
        justifyContent: "flex-start",
        flexFlow: "row wrap",
        borderTop: "1px solid #D5D5D5"
      }}
    >
      {item.map(
        ({ image, underPrice, price, itemName, reviewCounter, id }, idx) => (
          <Link to={`/itemDetail/${id}`} key={idx}>
            <Item
              image={image}
              underPrice={underPrice}
              price={price}
              itemName={itemName}
              id={id}
              reviewCounter={reviewCounter}
            ></Item>
          </Link>
        )
      )}
    </Container>
  );
};

export default Items;
