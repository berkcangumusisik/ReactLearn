import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
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
  */
