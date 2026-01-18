function BlogItem({ image, title, excerpt }) {
  return (
    <div className="blog-item border h-100 p-4">
      <img className="img-fluid mb-4" src={image} alt={title} />
      <a href="" className="h5 lh-base d-inline-block">{title}</a>
      <div className="d-flex text-black-50 mb-2">
        <div className="pe-3">
          <small className="fa fa-eye me-1"></small>
          <small>9999 Views</small>
        </div>
        <div className="pe-3">
          <small className="fa fa-comments me-1"></small>
          <small>9999 Comments</small>
        </div>
      </div>
      <p className="mb-4">{excerpt}</p>
      <a href="" className="btn btn-outline-primary px-3">Read More</a>
    </div>
  );
}

export default BlogItem;