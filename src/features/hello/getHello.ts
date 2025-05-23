import { createServerFn } from '@tanstack/react-start';

interface FullName {
  firstName: string;
  lastName: string;
}

export const getHelloWorld = async () => {
  const data: FullName = { firstName: 'Hello', lastName: 'World' };

  return Promise.resolve(`hello, ${data.firstName} ${data.lastName}`);
};

// server function that run in the server
export const getHello = createServerFn().handler(() => {
  return getHelloWorld();
});
