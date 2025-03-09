import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 text-xs">
        <span>Copyright&nbsp;2025&nbsp;|&nbsp;</span>
        <span className="text-sky-500">Fjellderek&nbsp;Software</span>
      </footer>
    </div>
  );
}
