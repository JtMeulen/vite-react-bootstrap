import { useCounter } from '../../hooks/useCounter/useCounter';
import { HelloWorldProps } from './HelloWorld.types';

export const HelloWorld = ({ name }: HelloWorldProps) => {
  const { count, increment, decrement } = useCounter({ initialValue: 0 });

  return (
    <>
      <h1>Hello {name ? name : 'Guest'}</h1>

      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};
