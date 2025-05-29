import { Navbar } from "@/components/navbar";

import { HeartFilledIcon } from "@/components/icons";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 text-xs">
        <span className="text-yellow-500">Copyright&nbsp;</span>
        <span>2025</span>
        <HeartFilledIcon className="w-4 h-4 mx-1 text-danger" />
        <span className="text-sky-500">Fjellworks.dev</span>
      </footer>
    </div>
  );
}
