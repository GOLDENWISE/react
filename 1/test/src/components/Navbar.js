const Navbar = (props) => {
  return (
    <div>
      <h2>{props.NavHeading}</h2>
      <ul>
        <li>
          <a href="#">{!props.test ? "Home" : props.test}</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
//memanggil variabel yang memiliki isi data yang dikirim dari file App.js atau file inti. syntax: {props.namavariabelyangdikirimkanpadafileinti}
export default Navbar;
