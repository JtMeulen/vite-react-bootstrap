export const mockFetch = (mockData: object, success: boolean = true) => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: async () => (success ? Promise.resolve(mockData) : Promise.reject()),
      ok: success,
    }),
  ) as jest.Mock;

  jest.mock('@tanstack/react-query', () => ({
    useQuery: jest.fn().mockReturnValue({ data: { ...mockData }, isLoading: false, error: {} }),
  }));
};
