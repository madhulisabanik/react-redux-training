import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('renders learn react', () => {
  const initialState = { todo: {
    todoData: []
  }};
  const mockStore = configureStore();
  let store;

  test('renders learn react link', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>, 
      { wrapper: MemoryRouter }
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});
