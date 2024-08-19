import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import { mockFetch } from '@/utils/testHelpers';

import { Users } from './Users';

// This could be moved to a helper file, or a custom render function
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('Users', () => {
  it('renders correctly', async () => {
    render(<Users />, { wrapper: createWrapper() });

    const textElement = await screen.findByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  it('renders user data after fetching', async () => {
    const mockData = [
      { name: 'John Doe', id: '1' },
      { name: 'Bruce Wayne', id: '2' },
      { name: 'Clark Kent', id: '3' },
    ];

    mockFetch(mockData);

    render(<Users />, { wrapper: createWrapper() });

    const listitemsEl = await screen.findAllByRole('listitem');
    expect(listitemsEl).toHaveLength(mockData.length);

    listitemsEl.forEach((item, index) => {
      expect(item).toHaveTextContent(mockData[index].name);
    });
  });

  it('renders error message when the fetch fails', async () => {
    mockFetch({}, false);

    render(<Users />, { wrapper: createWrapper() });

    const errorMessage = await screen.findByText('Error fetching users');
    expect(errorMessage).toBeInTheDocument();
  });
});
