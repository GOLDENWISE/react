//untuk variabel ini, pada react pastikan memiliki huruf awal kapital
//contoh membuat component dengan function
const Button = (props) => {
  return (
    <div>
      <button onClick={props.clicked}>Click Here!</button>
    </div>
  );
};

export default Button; //mengekspor variabel Button yang merupakan arrow function
