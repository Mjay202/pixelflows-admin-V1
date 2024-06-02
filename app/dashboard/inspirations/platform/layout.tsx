import type { ReactNode } from 'react';
import { initDropdowns } from 'flowbite';


type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  
  return (
    <section>
      {children}
    </section>
  );
}

export default Layout;