import React from 'react';


const JaladhijaProducts = () => {
  const products = [
    {
      name: 'Jaladhija 1010 Single',
      dimensions: [
        'Inside W 1200 x B 1200 x H 2350 mm',
        'Outside W 1600 x B 1950 x H 3100 mm',
        'Door 600 x 24 x 1950 mm',
        'Cantilever 450 x 1200 mm',
        'Foot Step 450 x 1200 x 250 mm',
      ],
    },
    {
      name: 'Jaladhija 1020 Double',
      dimensions: [
        'Inside W 1200 x B 1200 x H 2350 mm',
        'Outside W 3400 x B 1500 x H 3100 mm',
        'Door 600 x 24 x 1950 mm',
        'Cantilever 450 x 1200 mm',
        'Foot Step 450 x 1200 x 250 mm',
      ],
    },
    {
      name: 'Jaladhija MINI',
      dimensions: [
        'Inside W 1000 x B 1000 x H 2350 mm',
        'Outside W 1400 x B 1850 x H 3100 mm',
        'Door 600 x 24 x 1950 mm',
        'Cantilever 450 x 1000 mm',
        'Foot Step 450 x 1000 x 250 mm',
      ],
    },
  ];

  return (
    <>
    <section className="jaladhija-products">
      <h1>PRODUCTS</h1>
      <p>Jaladhija and Accessories</p>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className={`product-card ${index === 1 ? 'double' : ''}`}>
            <h2>{product.name}</h2>
            <ul>
              {product.dimensions.map((dim, i) => (
                <li key={i}>{dim}</li>
              ))}
            </ul>
            <button>ORDER NOW</button>
          </div>
        ))}
      </div>
    </section>
    <section className="jaladhija-overview">
      <div className="content-container">
        <h1>Jaladhija - Product Overview</h1>
        <div className="overview-content">
          <img src="https://via.placeholder.com/200x150?text=Jaladhija+Toilet" alt="Jaladhija Toilet" />
          <p>
            Jaladhija provides maintainable public toilets which have self-cleaning mechanisms. It saves cost on operation and maintenance of public toilets almost 90% by employing new public toilet service methods. Pay-per-use public toilets are effective only at places where there are heavy flow of people like markets, railway stations and bus stands. But is not possible and city outskirts are the places where public toilets are most required. But it is not possible to maintain these toilets with pay-per-use methods as there will have not much users all the time. Here IP toilet with its unique self-cleaning mechanism, vandal-proof design, luxurious interiors, high level of hygiene and low operational cost become effective. Considering cost of total ownership within 5 years service cost of a Public Toilet, 70% of the cost will be its operational cost. Without proper maintenance, public toilets are useless and a health hazard to the public. But requirements for public toilets are increasingly important with the economic development and resulted urbanization and floating population. The highways, malls, airports, railway stations, general hospitals, stadiums, prepaid taxi counters, camping and training sites, tourist places, military camps, construction sites and public offices require IPtoilet. Altersoft will provide toilet units with life time service and maintenance. It will have online software to manage them and mobile app for public to find and track installed and operating toilets. The intelligent public toilet was designed keeping in mind of a specific group of users for whom safe and hygienic sanitation is important like women, on-site workers, city commuters, travelers, campers, etc. IPtolet have electronic sensors to keep its hygiene even with improper usage of occupants. It keeps minimum water per usage compared to traditional toilets. It is basically designed to have a clean and unattended public convenience facility. Daily one time cleaning is also a part of its service policy. The Altersoft developed web based software to monitor its status which ensures proper service of each unit during its service time. Jaladhija is portable and with variant models to help men, women and disabled. Women friendly IPtolets will have women-friendly features such as napkin vending machine, incinerator to destroy used napkins, baby stations for changing diapers and the like. IPtolets in common will have automatic sensor taps and dustbins. Fans and lights will start functioning once the door is opened. There will be a water tank inside the toilet and the door will be opened only if the tank has enough water. The floor cleaner will function automatically after four to ten visits. There is automatic pre-flush when a person enters inside. It has power and water backup for its users in case of sudden power outage or water discontinuation. However, before the backup depletes, the toilet will be disabled for any new entry unless the power and water supply resumes. Coins can be used in public places, while smartcards or button press can be provided to operate these IPtolets for schools, colleges and government offices who have a closed user group.
          </p>
        </div>
        <div className="sidebar">
          <h2>Enter Keywords</h2>
          <input type="text" placeholder="Enter Keywords..." />
          <h2>Jaladhija - List of Accessories</h2>
          <select>
            <option value="">Select an Accessory</option>
            <option value="coin-mechanism">Coin mechanism/Touch free button/Smartcard</option>
            <option value="touch-free-basin">Touch free wash basin</option>
            <option value="auto-flush">Pre-flush/Auto flush system</option>
            <option value="sanitary-disposal">Sanitary Disposal Unit</option>
            <option value="multi-angle-hooks">Multi Angle Hooks</option>
            <option value="manual-towel-bolt">Manual towel bolt inside</option>
            <option value="mirror">Mirror</option>
            <option value="toilet-pan">European or Indian style Toilet Pan</option>
            <option value="stainless-faucet">Stainless steel faucet or mug</option>
          </select>
          <h2>DOWNLOADS</h2>
          <select>
            <option value="">Select a Download</option>
            <option value="brochure">Brochure</option>
            <option value="presentation">Presentation</option>
            <option value="video">Video</option>
            <option value="photographs">Photographs</option>
          </select>
        </div>
      </div>
    </section>
  </>
  );
};

export default JaladhijaProducts;