// src/pages/Home.jsx
import React from 'react';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <HomeCard />
        </div>
      </div>
    </div>
  );
}