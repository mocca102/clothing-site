import React from 'react';
import './MenuItem.scss';

export default ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-image"
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
