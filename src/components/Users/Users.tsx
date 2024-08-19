import { useQuery } from '@tanstack/react-query';

type IUser = {
  id: number;
  name: string;
};

export const Users = () => {
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!res.ok) {
        throw new Error('Error fetching users');
      }

      return res.json();
    },
  });

  return (
    <section>
      <h2>Users</h2>
      {isError && <p>{error.message}</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((user: IUser) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
