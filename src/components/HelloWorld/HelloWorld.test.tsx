import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

describe('HelloWorld', () => {
  it('renders correctly', async () => {
    render(<HelloWorld />);

    const textElement = await screen.findByText('Hello Guest');
    expect(textElement).toBeInTheDocument();
  });

  it('renders with a name', async () => {
    render(<HelloWorld name="Joey" />);

    const textElement = await screen.findByText('Hello Joey');
    expect(textElement).toBeInTheDocument();
  });
});
