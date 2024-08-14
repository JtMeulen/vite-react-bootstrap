import { render, screen } from '@testing-library/react';
import { Users } from './Users';

const mockFetch = (response: unknown, success: boolean = true) => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: async () =>
        success ? Promise.resolve(response) : Promise.reject(),
    }),
  ) as jest.Mock;
};

describe('Users', () => {
  beforeEach(() => {
    global.fetch = jest.fn(async () => Promise.resolve()) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', async () => {
    render(<Users />);

    const textElement = await screen.findByText('Users');
    expect(textElement).toBeInTheDocument();
  });

  it('renders user data after fetching', async () => {
    const mockData = [
      { name: 'John Doe' },
      { name: 'Bruce Wayne' },
      { name: 'Clark Kent' },
    ];

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
