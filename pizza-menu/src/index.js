import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12} // Sayılar için süslü parantez kullanmamıza gerekiyor.
      />
      <Pizza />
    </main>
  );
}

function Pizza(props) {
  /**
   * Destekler, verileri ana bileşenlerden alt bikelenlere aktarmak için kullanılır.
   * Bileşenleri yapılandırmak ve özelleştirmek için kullanılır.
   * Ana bileşenlerden alt bileşenlere veri aktarmak için kullanılır.
   * Her şey props olarak adlandırılabilir. 
   */

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} -
      {isOpen ? " We are open" : " We are closed"}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // Burada root elementi oluşturuyoruz.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // Burada App componentini render ediyoruz. İlk kez render ettiğimiz için createRoot kullanıyoruz.
// Burada StrictMode kullanarak uygulamamızı sıkı bir şekilde kontrol ediyoruz. Hataları görebilmemiz için kullanılır.
/**
 * React projesi oluşturmak için npx create-react-app@5 <ap> ile şeklindedir.
 * React bize bir root elementi verir ve bu elementi kullanarak uygulamamızı render ederiz.
 * npm start ile uygulamayı başlatırız.
 * 
 React Nedir?
 - Facebook tarafından geliştirilen açık kaynak kodlu bir JavaScript kütüphanesidir.
 - Popüler bir JavaScript kütüphanesidir.
 - Kullanıcı arayüzü oluşturmak için kullanılır.
 - Component(Bileşen) tabanlıdır)
 - Declerative bir yapıya sahiptir. Yani bir şeyin nasıl yapılacağını değil ne yapılacağını belirtir.
 - State- driven (State yönlüdür) bir yapıya sahiptir. Yani uygulama durumuna göre değişir.
 -

 function App(){
    // Burada JSX ile bir şeyler döndürüyoruz.
 }
 */

/**
  Component Nedir?
  - Uygulamanın UI(User Interface) kısmını oluşturmak için kullanılır.
  - Bir fonksiyon ya da class olabilir.
  - Birden fazla component bir araya gelerek uygulamanın UI'ını oluşturur.
  - Componentler birbirlerinden bağımsızdır.
  - Yeniden kullanılabilir.

  Bir bileşen (component) içinde data, logic ve appearance bir arada bulunabilir.
  JSX : Bileşenlerin görünümünü tanımlamak için kullanılır. JavaScript ve HTML bir arada kullanılır.
  React.createElement() : JSX'in alt yapısında kullanılır. JSX'i JavaScript'e çevirir. 

  Imprative (Emir) : 
  - Bir şeyin nasıl yapılacağını belirtir.
  - Manuel DOM öğeleri oluşturur.
  - DOM manipülasyonları yapar.

  Declarative (Bildirme) :
  - Mevcut verilere dayanarak JSX ile bir şeyin ne yapılacağını belirtir.
  - DOM manipülasyonları yapmaz.
  - React'ta kullanılır.

  React içine CSS yazmak için style attribute kullanılır. style : {{color: "red"}}  gibi
  */
