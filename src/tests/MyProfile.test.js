import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyProfile from '../components/MyProfile';

test('Check if MyProfile component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
