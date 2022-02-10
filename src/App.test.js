import { render, screen, fireEvent } from '@testing-library/react';
import Form from './components/form';

it('should not render error icon in its initial state', () => {
  render(<Form />);
  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeNull();
});

it('should not render error message in its initial state', () => {
  render(<Form />);
  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeNull();
});

it('should not render the error icon when a valid email is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@mail.com' } });
  fireEvent.submit(form);

  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeNull();
});

it('should not render the error message when a valid email is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@mail.com' } });
  fireEvent.submit(form);

  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeNull();
});

it('should render the error icon when an invalid email without @ is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane#email.com' } });
  fireEvent.submit(form);

  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeInTheDocument();
});

it('should render the error message when an invalid email without @ is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane#email.com' } });
  fireEvent.submit(form);

  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeInTheDocument();
});

it('should render the error icon when an invalid email without domain is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@' } });
  fireEvent.submit(form);

  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeInTheDocument();
});

it('should render the error message when an invalid email without domain is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@' } });
  fireEvent.submit(form);

  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeInTheDocument();
});

it('should render the error icon when an invalid email with a incorrect domain is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@mail' } });
  fireEvent.submit(form);

  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeInTheDocument();
});

it('should render the error message when an invalid email with a incorrect domain is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: 'jane@mail' } });
  fireEvent.submit(form);

  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeInTheDocument();
});

it('should render the error icon when an invalid email without prefix is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: '@mail.com' } });
  fireEvent.submit(form);

  const errorIcon = screen.queryByLabelText('error icon');
  expect(errorIcon).toBeInTheDocument();
});

it('should render the error message when an invalid email without prefix is submited', () => {
  render(<Form />);
  const form = screen.getByRole('form');
  const input = screen.getByPlaceholderText('Email Address');

  fireEvent.change(input, { target: { value: '@mail.com' } });
  fireEvent.submit(form);

  const errorMessage = screen.queryByText('Please provide a valid email');
  expect(errorMessage).toBeInTheDocument();
});
