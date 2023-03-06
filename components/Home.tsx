import Banner from "./Banner";
import SideNavbar from "@/components/navbar/SideNavbar";

export default function Home() {
  return (
    <main id="home-page">
      <div className="upper-view">
        <SideNavbar />
        <Banner />
      </div>
    </main>
  );
}
