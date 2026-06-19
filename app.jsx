import React from 'react';
import './App.css';

function App() {
  // Zomato ke main categories ka data
  const categories = [
    {
      title: "Order Online",
      desc: "Stay home and order to your doorstep",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"
    },
    {
      title: "Dining",
      desc: "View the city's favourite dining venues",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
    },
    {
      title: "Live Events",
      desc: "Discover India's best festivals and concerts",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80"
    }
  ];

  // Popular localities (places) ka data
  const localities = [
    { name: "Connaught Place", count: "342 places" },
    { name: "Sector 29, Gurgaon", count: "215 places" },
    { name: "Rajouri Garden", count: "389 places" },
    { name: "Saket", count: "412 places" },
    { name: "Noida Sector 18", count: "290 places" },
    { name: "Cyber Hub", count: "180 places" }
  ];

  return (
    <div className="zomato-app">
      
      {/* 1. Hero Banner Section */}
      <header className="zomato-hero">
        <nav className="hero-nav">
          <div className="nav-left-text">Get the App</div>
          <div className="nav-right-links">
            <span>Investor Relations</span>
            <span>Add restaurant</span>
            <span>Log in</span>
            <span>Sign up</span>
          </div>
        </nav>

        <div className="hero-content">
          {/* Large Zomato Text Logo */}
          <h1 className="zomato-logo">zomato</h1>
          <h2 className="hero-tagline">Discover the best food & drinks in Delhi NCR</h2>
          
          {/* Search Bar Container */}
          <div className="zomato-search-container">
            <div className="search-location">
              <span className="geo-icon">📍</span>
              <input type="text" placeholder="Delhi NCR" defaultValue="Delhi NCR" />
              <span className="arrow-icon">▾</span>
            </div>
            <div className="search-divider">|</div>
            <div className="search-restaurant">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Main Body Container */}
      <main className="zomato-container">
        
        {/* Category Cards Section */}
        <section className="category-section">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-card">
              <div className="cat-image-wrapper">
                <img src={cat.img} alt={cat.title} />
              </div>
              <div className="cat-info">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Popular Localities Section */}
        <section className="localities-section">
          <h2 className="section-title">Popular localities in and around <strong>Delhi NCR</strong></h2>
          
          <div className="localities-grid">
            {localities.map((loc, idx) => (
              <div key={idx} className="locality-card">
                <div className="loc-text">
                  <h4>{loc.name}</h4>
                  <p>{loc.count}</p>
                </div>
                <span className="loc-arrow">›</span>
              </div>
            ))}
            
            {/* See More Card */}
            <div className="locality-card see-more-card">
              <div className="loc-text">
                <h4>see more</h4>
              </div>
              <span className="loc-arrow">▾</span>
            </div>
          </div>
        </section>

      </main>

      {/* 3. Footer */}
      <footer className="zomato-footer">
        <div className="footer-top">
          <h2 className="footer-logo">zomato</h2>
          <div className="footer-dropdowns">
            <button className="f-btn">🇮🇳 India ▾</button>
            <button className="f-btn">🌐 English ▾</button>
          </div>
        </div>
        <p className="footer-credit">Created as a Zomato Homepage Clone Project    
          SAKSHI SHARMA   CSE24   2503201000977
        </p>
      </footer>

    </div>
  );
}

export default App;