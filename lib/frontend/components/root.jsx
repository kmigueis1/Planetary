
import { Provider } from 'react-redux';
import React from 'react';
import SideBarContainer from './sidebar_container';
import CanvasContainer from './canvas_container';
import TopBar from './top_bar';
import Footer from './footer';

const Root = ({store}) => (
  <Provider store={store}>
    <div className="app-container">
      <CanvasContainer />
      <SideBarContainer />
      <TopBar />
      <Footer />
    </div>
  </Provider>

);

export default Root;
