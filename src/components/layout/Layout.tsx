import { Outlet } from 'react-router-dom';
import { FloatingContactButtons } from '../ui/FloatingContactButtons';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
