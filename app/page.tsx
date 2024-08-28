import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="navbar">
    <Navbar/>
    <Products />
    <Footer />
   </div>
  );
}


