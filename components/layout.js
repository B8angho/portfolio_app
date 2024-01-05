import Header from "./header";
import Footer from "./footer";
import OtherContent from "./home/stack";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div>
        <div>{children}</div>
        <OtherContent />
      </div>
      <Footer />
    </div>
  );
}
