import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import TodoList from './TodoList'; // Adjust the import path according to your file structure

describe('TodoList', () => {
  it('renders without crashing', () => {
    render(<TodoList />);
  });

  it('initially displays the NewTodoForm', () => {
    render(<TodoList />);
    // Assuming the NewTodoForm has a distinctive element such as a form, input, or button that can be identified
    // This example assumes there's a button in the form. Adjust as necessary.
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // Optionally, if you want to ensure the initial state has no todos rendered, you can check for the absence of certain elements.
  it('initially has no todos listed', () => {
    render(<TodoList />);
    // This assumes each todo would be in a 'li' element. Adjust the expectation if your structure is different.
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<TodoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
