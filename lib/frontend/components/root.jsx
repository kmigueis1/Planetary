
import { Provider } from 'react-redux';
import React from 'react';
import SideBarContainer from './sidebar_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div className="side-bar-container">
      <SideBarContainer />
    </div>
  </Provider>

);

export default Root;
