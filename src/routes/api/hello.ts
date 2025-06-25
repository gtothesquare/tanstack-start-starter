import { createServerFileRoute } from '@tanstack/react-start/server';
import { json } from '@tanstack/react-start';
import { getHelloWorld } from '~/features/hello/getHello';

// api route to be used by client code
export const ServerRoute = createServerFileRoute('/api/hello').methods({
  GET: async () => {
    const data = await getHelloWorld();
    return json(data);
  },
});
