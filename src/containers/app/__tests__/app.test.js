import { render, screen, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/index';
import App from '../App';

describe('Rendering component', () => {
  it('creates an App component', () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    });
    // eslint-disable-next-line
    const element = screen.getByText('Personal Expenses');
  });
});

describe('Display', () => {
  it('renders correctly', () => {
    const comp = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    ).toJSON();
    expect(comp).toMatchSnapshot();
  });
});
