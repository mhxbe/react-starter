function debounce(func: () => void, wait?: number): () => void {
  let timeout: number;
  return function (...args: any[any]): void {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func.apply(func, args);
    }, wait || 500);
  };
}

export default debounce;
