export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 h-[100vh]">
      {children}
    </main>
  );
}
