import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('returns the default initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  // When passing props to the hook, you need to use the 'initialProps' field in the 'renderHook' function
  it('returns the initialValue as the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialValue: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  it('increments the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it('decrements the count', () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-2);
  });
});
