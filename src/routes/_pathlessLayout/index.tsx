import { createFileRoute } from '@tanstack/react-router';
import { getHello } from '~/features/hello/getHello';

export const Route = createFileRoute('/_pathlessLayout/')({
  component: Home,
  loader: async () => {
    //We use a server function to get the data
    const message = await getHello();
    return { message };
  },
});

export default function Home() {
  const { message } = Route.useLoaderData();
  return (
    <div className="flex justify-center align-middle h-full pt-12 text-white">
      {message}
    </div>
  );
}
