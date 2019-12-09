/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../Menu-item/MenuItem';
import './Directory.scss';


const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ id, ...restProps }) => (
      <MenuItem key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
