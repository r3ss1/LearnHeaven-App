import NonDashboardNavbar from "../components/NonDashboardNavbar";
import Landing from "./(nondashboard)/Landing/Page";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
     <NonDashboardNavbar />
     <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
