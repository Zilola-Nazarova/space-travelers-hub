import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

test('Check if Missions component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
