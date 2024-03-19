import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from './Todo'; // Adjust the import path according to your file structure

describe('Todo', () => {
  it('renders without crashing', () => {
    render(<Todo />);
  });

  it('displays the task', () => {
    const taskText = 'Test Todo';
    render(<Todo task={taskText} />);
    expect(screen.getByText(taskText)).toBeInTheDocument();
  });

  it('renders default task when no task is provided', () => {
    render(<Todo />);
    expect(screen.getByText('default todo')).toBeInTheDocument();
  });

  it('displays edit button', () => {
    render(<Todo />);
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  // Additional tests could include checking the delete button,
  // and simulating clicks to transition to and from the editing state.
});
