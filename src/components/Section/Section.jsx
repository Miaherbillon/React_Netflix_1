const Section = (props) => {
  return (
    <>
      <div>{props.categorie} </div>
      {elem.images.map((image) => {
        console.log(image);
        return (
          <>
            <img src={image} alt="photos films" />;
          </>
        );
      })}
    </>
  );
};

export default Section;
