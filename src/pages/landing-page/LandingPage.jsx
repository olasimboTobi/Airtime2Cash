import Navbar from "../../components/navbar/Navbar";
import Display from "../../components/LandingPage/display/Display";
import FirstAbout from "../../components/LandingPage/display/about/First";
import Cards from "../../components/LandingPage/display/about/Cards";
import Display1 from "../../components/myDisplay/MyDisplay";
import Info from "../../components/LandingPage/display/info/Info";
import FooterStyles from "../../components/LandingPage/display/footer/Footer";
import Pagination from "../../components/LandingPage/display/pagination/Carousel";

function LandingPage() {
  const token = localStorage.getItem("token");
  return (
    <div>
      <Navbar isLoggedIn={token ? true : false} />
      <Display />
      <FirstAbout />
      <Cards />
      <Display1 />
      <Info />
      <Pagination />
      <FooterStyles />
    </div>
  );
}

export default LandingPage;
