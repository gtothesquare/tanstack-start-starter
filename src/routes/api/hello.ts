import { createAPIFileRoute } from '@tanstack/react-start/api';
import { json } from '@tanstack/react-start';
import { getHelloWorld } from '~/features/hello/getHello';

// api route to be used by client code
export const APIRoute = createAPIFileRoute('/api/hello')({
  GET: async () => {
    const data = await getHelloWorld();
    return json(data);
  },
});
