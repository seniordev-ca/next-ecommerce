type ProductDescriptionType = {
  show: boolean;
  description: string
}

const Description = ({ show, description }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  );
};
  
export default Description;
    