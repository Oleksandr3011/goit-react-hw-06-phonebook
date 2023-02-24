import { useState, useEffect } from 'react';

export const useLСS = (key, value) => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem(key)) ?? value
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);

  return [storage, setStorage];
};