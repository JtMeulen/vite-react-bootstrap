import { render, screen } from '@testing-library/react';

import { mockFetch } from '@/utils/testHelpers';

import { Users } from './Users';

describe('Users', () => {
  it('renders correctly', async () => {
    render(<Users />);

    const textElement = await screen.findByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  it('renders user data after fetching', async () => {
    const mockData = [{ name: 'John Doe' }, { name: 'Bruce Wayne' }, { name: 'Clark Kent' }];

    mockFetch(mockData);

    render(<Users />);

    const listitemsEl = await screen.findAllByRole('listitem');
    expect(listitemsEl).toHaveLength(mockData.length);

    listitemsEl.forEach((item, index) => {
      expect(item).toHaveTextContent(mockData[index].name);
    });
  });

  it('renders error message when the fetch fails', async () => {
    mockFetch(null, false);

    render(<Users />);

    const errorMessage = await screen.findByText('Error fetching users');
    expect(errorMessage).toBeInTheDocument();
  });
});
