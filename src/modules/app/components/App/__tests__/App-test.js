import React from 'react';
import ReactDOM from 'react-dom';
import {testComponent} from "../../../../../utils/test/testComponent";
import App from '..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(testComponent(App, {}, {}), div);
  ReactDOM.unmountComponentAtNode(div);
});
