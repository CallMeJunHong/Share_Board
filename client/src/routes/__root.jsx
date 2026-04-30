// This is the root route of the application. It serves as the entry point for all other routes.
import { Outlet, createRootRoute} from '@tanstack/react-router'

// The root route component. It renders the Outlet component, which will render the matched child route component.
export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return <Outlet />;
}

function NotFoundComponent() {
  return <h1>Not Found!</h1>;
}