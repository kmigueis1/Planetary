
import { Provider } from 'react-redux';
import React from 'react';
import SideBarContainer from './sidebar_container';
import CanvasContainer from './canvas_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div className="app-container">
      <SideBarContainer />
      <CanvasContainer />
    </div>
  </Provider>

);

export default Root;
