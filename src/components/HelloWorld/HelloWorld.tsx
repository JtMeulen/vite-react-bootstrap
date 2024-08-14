import { useCounter } from '@/hooks/useCounter/useCounter';
import { HelloWorldProps } from './HelloWorld.types';
import viteLogo from '/logo.svg';

import styles from './HelloWorld.module.scss';

export const HelloWorld = ({ name }: HelloWorldProps) => {
  const { count, increment, decrement } = useCounter({ initialValue: 0 });

  return (
    <>
      <h1>Hello {name ? name : 'Guest'}</h1>

      <img src={viteLogo} className="logo" alt="Vite logo" />

      <div className={styles.count}>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};
