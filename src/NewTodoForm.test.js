import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import NewTodoForm from './NewTodoForm'; // Adjust the import path as necessary

describe('NewTodoForm', () => {
  it('renders without crashing', () => {
    render(<NewTodoForm createTodo={() => {}} />);
  });

  it('allows entering a task', () => {
    render(<NewTodoForm createTodo={() => {}} />);
    // Check if the input is present and can receive user input
    const input = screen.getByLabelText(/task:/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  it('clears input after adding a todo', () => {
    const createTodoMock = jest.fn();
    render(<NewTodoForm createTodo={createTodoMock} />);
    const input = screen.getByLabelText(/task:/i);
    const button = screen.getByRole('button', { name: /add a todo!/i });

    // Simulate user entering a task and submitting the form
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    // Check if the input is cleared after form submission
    expect(input.value).toBe('');
    // Optionally, check if the createTodo function was called correctly
    expect(createTodoMock).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<NewTodoForm createTodo={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
