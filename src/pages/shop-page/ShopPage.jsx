import React from 'react';

import SHOP_DATA from '../../assets/shop-data';
import ShopCollectionPreview from '../../components/shop-collection-preview/ShopCollectionPreview'
import '../PageContainer.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = { collections: SHOP_DATA };
  }

  renderCollections = () => {
    const { collections } = this.state;

    return collections.map(({ id, items, title, routeName}) => (
      <ShopCollectionPreview
        key={id}
        items={items}
        title={title}
        routeName={routeName}
      />
    ));
  }

  render() {
    return (
      <div className="page-container shop-page">
        {this.renderCollections()}
      </div>
    );
  }
}

export default ShopPage;