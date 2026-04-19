import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <main className="relative flex min-h-screen flex-col gap-10 overflow-hidden sm:gap-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.14),_transparent_32%)]" />
      <Header />
      <div className="relative z-10 flex-1">
        <Body />
      </div>
      <Footer />
    </main>
  );
}
