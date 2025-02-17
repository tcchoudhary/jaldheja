import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const CanonicalTag = () => {
  const location = useLocation();
  const canonicalUrl = `${window?.location?.origin}${location?.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalTag;
