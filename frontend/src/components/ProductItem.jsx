function ProductItem({ image, name, price }) {
  return (
    <div className="product-item text-center border h-100 p-4">
      <img className="img-fluid mb-4" src={image} alt={name} />
      <div className="mb-2">
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        <small className="fa fa-star text-primary"></small>
        <small>(99)</small>
      </div>
      <a href="" className="h6 d-inline-block mb-2">{name}</a>
      <h5 className="text-primary mb-3">{price}</h5>
      <a href="" className="btn btn-outline-primary px-3">Add To Cart</a>
    </div>
  );
}

export default ProductItem;