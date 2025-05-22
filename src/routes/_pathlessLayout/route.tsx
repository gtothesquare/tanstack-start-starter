import { createFileRoute, Outlet } from '@tanstack/react-router';
import { PageLayout } from '~/components/layouts/PageLayout';

export const Route = createFileRoute('/_pathlessLayout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
