import React, { useState } from 'react';
import ServiceRequestForm from './ServiceRequestForm';
import ServiceRequestList from './ServiceRequestList';

const Apple = () => {
  const [serviceRequests, setServiceRequests] = useState([]);

  const handleServiceRequestSubmit = (request) => {
    setServiceRequests([...serviceRequests, request]);
  };

  return (
    <div>
      <ServiceRequestForm onSubmit={handleServiceRequestSubmit} />
      <ServiceRequestList requests={serviceRequests} />
    </div>
  );
};

export default Apple;
