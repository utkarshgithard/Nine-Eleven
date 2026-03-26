import React from 'react';

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "name": "nine2Eleven",
    "image": "https://nine2eleven.in/logo.png", // Assuming a logo exists
    "@id": "https://nine2eleven.in",
    "url": "https://nine2eleven.in",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Danapur",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "801503", // Approximate for Danapur, Patna
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.6333,
      "longitude": 85.0333
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "23:00"
    },
    "sameAs": [
      "https://www.facebook.com/nine2eleven",
      "https://www.instagram.com/nine2eleven"
    ],
    "servesCuisine": "Indian, Multi-cuisine",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
