import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LuxuryInTaste</h1>
          <p>Discover our exclusive collection of premium products</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Product cards will be added here */}
          <div className="product-card">
            <div className="product-image placeholder"></div>
            <h3>Product Name</h3>
            <p>$99.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* More product cards... */}
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <div className="category-image placeholder"></div>
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <div className="category-image placeholder"></div>
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <div className="category-image placeholder"></div>
            <h3>Home & Living</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 