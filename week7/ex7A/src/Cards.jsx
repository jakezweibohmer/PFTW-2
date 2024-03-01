function Cards({ name, manufacturer, released, description }) {
  return (
    <>
      <CardItem
        name={cards[0].name}
        manufacturer={cards[0].manufacturer}
        released={cards[0].released}
        description={cards[0].description}
      />
      <CardItem
        name={cards[1].name}
        manufacturer={cards[1].manufacturer}
        released={cards[1].released}
        description={cards[1].description}
      />
      <CardItem
        name={cards[2].name}
        manufacturer={cards[2].manufacturer}
        released={cards[2].released}
        description={cards[2].description}
      />
      <CardItem
        name={cards[3].name}
        manufacturer={cards[3].manufacturer}
        released={cards[3].released}
        description={cards[3].description}
      />
      <CardItem
        name={cards[4].name}
        manufacturer={cards[4].manufacturer}
        released={cards[4].released}
        description={cards[4].description}
      />
    </>
  );
}

export default Cards;
