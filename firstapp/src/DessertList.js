function DessertsList({ props }) {
  // Implement the component here.
  const data = props
    ?.filter((d) => d.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map((dessert) => {
      const inText = `${dessert.name} - ${dessert.calories} cal`;
      return <li key={dessert.name}>{inText}</li>;
    });
  return data;
}

export default DessertsList;
