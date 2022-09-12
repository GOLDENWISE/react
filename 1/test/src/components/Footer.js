import React from "react"; //mengimport class React di file react

//contoh membuat component dengan class
class Footer extends React.Component {
  //pada class element, untuk mengambil variabel prop yang dikirim, gunakan constructor
  //dan didalam constructor, deklarasikan props yang diambil dengan syntax super(props)
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>MY FOOTER</h1>
        <p>{this.props.paragraf()}</p>
      </div>
    );
  }
}

export default Footer;
