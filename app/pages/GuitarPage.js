import React from 'react';

const GuitarPage = () => {
  const guitarRecommendations = {
    acoustic: [
      { 
        model: 'Martin D-28',
        brand: 'Martin',
        priceRange: '$2000 - $3000',
      },
      { 
        model: 'Taylor 314ce',
        brand: 'Taylor',
        priceRange: '$2500 - $3500',
      },
      { 
        model: 'Gibson J-45',
        brand: 'Gibson',
        priceRange: '$3000 - $4000',
      },
    ],
    electric: [
      { 
        model: 'Fender Stratocaster',
        brand: 'Fender',
        priceRange: '$1000 - $3000',
      },
      { 
        model: 'Squier Stratocaster',
        brand: 'Squier by Fender',
        priceRange: '$300 - $2000',
      },
      { 
        model: 'Gibson Les Paul',
        brand: 'Gibson',
        priceRange: '$2000 - $3000',
      },
      { 
        model: 'PRS Custom 24',
        brand: 'PRS',
        priceRange: '$1500 - $2500',
      },
    ],
    classical: [
      { 
        model: 'Cordoba C5',
        brand: 'Cordoba',
        priceRange: '$500 - $800',
      },
      { 
        model: 'Yamaha C40',
        brand: 'Yamaha',
        priceRange: '$150 - $250',
      },
      { 
        model: 'Taylor Academy 12e-N',
        brand: 'Taylor',
        priceRange: '$700 - $1000',
      },
    ],
  };

  return (
    <div>
      <h2>Guitar Recommendations</h2>
      <p>Explore these recommended guitars to find the perfect match for your playing style:</p>
      
      <h3>Acoustic Guitars</h3>
      <ul>
        {guitarRecommendations.acoustic.map((guitar, index) => (
          <li key={index}>
            <strong>{guitar.model}</strong>
            <p><strong>Brand: Fender</strong> {guitar.brand}</p>
            <p><strong>Price Range: $1000 - $3000</strong> {guitar.priceRange}</p>
          </li>
        ))}
      </ul>

      <h3>Electric Guitars</h3>
      <ul>
        {guitarRecommendations.electric.map((guitar, index) => (
          <li key={index}>
            <strong>{guitar.model}</strong>
            <p><strong>Brand: Les Paul</strong> {guitar.brand}</p>
            <p><strong>Price Range: $2000 - $3000</strong> {guitar.priceRange}</p>
          </li>
        ))}
      </ul>

      <h3>Classical Guitars</h3>
      <ul>
        {guitarRecommendations.classical.map((guitar, index) => (
          <li key={index}>
            <strong>{guitar.model}</strong>
            <p><strong>Brand: Yamaha</strong> {guitar.brand}</p>
            <p><strong>Price Range: $150 - $250</strong> {guitar.priceRange}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuitarPage;

