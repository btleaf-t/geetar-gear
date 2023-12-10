import React from 'react';

const AccessoriesPage = () => {
    const accessoriesRecommendations = [
        { name: 'Guitar Tuner', description: 'Keep your guitar in tune with a reliable tuner.' },
        { name: 'Guitar Strings', description: 'High-quality strings for a better sound and playability.' },
        { name: 'Guitar Picks', description: 'Various picks for different playing styles and tones.' },
        { name: 'Guitar Strap', description: 'Comfortable and adjustable strap for extended playing sessions.' },
        { name: 'Guitar Case', description: 'Protect your guitar during transportation and storage.' },
        { name: 'Capo', description: 'Change the pitch of your guitar easily with a capo.' },
      ];

    return (
    <div>
      <h2>Guitar Accessories Recommendations</h2>
      <p>Enhance your guitar playing experience with these essential accessories:</p>
      
      <ul>
        {accessoriesRecommendations.map((accessory, index) => (
          <li key={index}>
            <p><strong>Name: Fender Tuner</strong> {accessory.name}</p>
            <p><strong>Price: $50</strong> {accessory.price}</p>
            <p><strong>Rating: 4.7/5</strong> {accessory.rating}</p>
            <p><a href={accessory.purchaseLink} target="_blank" rel="noopener noreferrer">Purchase Here</a></p>//need to add link 
          </li>
        ))}
      </ul>
      <ul>
        {accessoriesRecommendations.map((accessory, index) => (
          <li key={index}>
            <p><strong>Name: Earnie Ball Strings</strong> {accessory.name}</p>
            <p><strong>Price: $20</strong> {accessory.price}</p>
            <p><strong>Rating: 4.5/5</strong> {accessory.rating}</p>
            <p><a href={accessory.purchaseLink} target="_blank" rel="noopener noreferrer">Purchase Here</a></p>//need to add link 
          </li>
        ))}
      </ul>
      <ul>
        {accessoriesRecommendations.map((accessory, index) => (
          <li key={index}>
            <p><strong>Name: Dunlop Variety Pack</strong> {accessory.name}</p>
            <p><strong>Price: $9</strong> {accessory.price}</p>
            <p><strong>Rating: 4.6/5</strong> {accessory.rating}</p>
            <p><a href={accessory.purchaseLink} target="_blank" rel="noopener noreferrer">Purchase Here</a></p>//need to add link 
          </li>
        ))}
      </ul>
      <ul>
        {accessoriesRecommendations.map((accessory, index) => (
          <li key={index}>
            <p><strong>Name: Earnie Ball Polypro Guitar Strap</strong> {accessory.name}</p>
            <p><strong>Price: $11</strong> {accessory.price}</p>
            <p><strong>Rating: 4.5/5</strong> {accessory.rating}</p>
            <p><a href={accessory.purchaseLink} target="_blank" rel="noopener noreferrer">Purchase Here</a></p>//need to add link 
          </li>
        ))}
      </ul>
      <ul>
        {accessoriesRecommendations.map((accessory, index) => (
          <li key={index}>
            <p><strong>Name: Fender Electric Guitar Gig</strong> {accessory.name}</p>
            <p><strong>Price: $57</strong> {accessory.price}</p>
            <p><strong>Rating: 4.2/5</strong> {accessory.rating}</p>
            <p><a href={accessory.purchaseLink} target="_blank" rel="noopener noreferrer">Purchase Here</a></p>//need to add link 
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AccessoriesPage;
