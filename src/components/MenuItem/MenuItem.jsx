import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  const handleClick = () => history.push(`${match.url}${linkUrl}`);

  return (
    <div
      role="link"
      className={`menu-item ${size}`}
      onClick={() => handleClick()}
      onKeyDown={(e) => (e.key === 'Enter' ? handleClick() : null)}
      tabIndex="0"
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="menu-item__bgImage"
      />
      <div className="menu-item__content">
        <h2 className="menu-item__title">{title.toUpperCase()}</h2>
        <span className="menu-item__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
