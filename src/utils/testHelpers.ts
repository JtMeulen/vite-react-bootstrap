export const mockFetch = (response: unknown, success: boolean = true) => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: async () => (success ? Promise.resolve(response) : Promise.reject()),
    }),
  ) as jest.Mock;
};
