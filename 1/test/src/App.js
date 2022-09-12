import React, { useState } from "react"; //mengambil suatu bagian pada module react yang bernama usestate
import "./App.css";
import Button from "./components/Button"; //mengambil variabel Button dari file button.js di file component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  //pengimplementasian useState
  //pengambilan useState / Penginisialisasi useState
  const [getNavbarValue, setNavbarValue] = useState("");
  const changeNavbarValue = () => {
    if (getNavbarValue == "") {
      setNavbarValue("My Contact");
    } else {
      setNavbarValue("");
    }
    //set: melakukan setting data yang akan diisikan pada get
    //get: isi dari data
  };
  const NavHeading = "MY WEBSITE";
  const clicked = () => {
    return alert("Tombol diclick");
  };

  //contoh menambahkan element baru ke footer.
  //gunakan tag <> element yang ditambahkan </>
  const paragraf = () => {
    return (
      <>
        <div>
          <h3>Mantap.</h3>
          <b> Jalan juga ni paragraf</b>
          <marquee>Yokoso, Watashi wa soul society</marquee>
        </div>
      </>
    );
  };
  return (
    <div>
      <Heading />
      <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
      <Navbar test={getNavbarValue} NavHeading={NavHeading} />
      <Button clicked={clicked} />
      <Footer paragraf={paragraf} />
    </div>
  );
  //<variabelyangmerupakankomponen   variabelpropsyangnantinyaakandipakepadakomponen={isidarivariabel}/>: pada react merupakan tag yang dapat kita buat sendiri, untuk memanggil component yang kita gunakan
  //variabelprops sifatnya optional
}

export default App;
