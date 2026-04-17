import GeoBanner from "./GeoBanner";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <GeoBanner />
        <Navbar />
        <Breadcrumb />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
