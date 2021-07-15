/*async function generarLinkDePago() {
    const productsToMP = carrito.map((element) => {
      let nuevoElemento = {
        title: element.nombre,
        description: element.descripcion,
        picture_url: element.img,
        category_id: element.id,
        quantity: Number(element.cantidad),
        currency_id: "ARS",
        unit_price: Number(element.precio),
      };
      return nuevoElemento;
    });
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-680675151110839-052307-64069089337ab3707ea2f547622a1b6a-60191006",
        },
        body: JSON.stringify({
          items: productsToMP,
        }),
      }
    );
    const data = await response.json();
    window.open(data.init_point, "_blank");
  }


var firebaseConfig = {
    apiKey: "AIzaSyD2MS429DXPAuR7yZ_Mtwylv6Oo2z08W5A",
    authDomain: "my-store---ine-maroc---coder.firebaseapp.com",
    projectId: "my-store---ine-maroc---coder",
    storageBucket: "my-store---ine-maroc---coder.appspot.com",
    messagingSenderId: "902666839489",
    appId: "1:902666839489:web:41f942cf68d341f68e7b40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if
            request.time < timestamp.date(2021, 8, 11);
      }
    }
  }
const getStorage = () => {
    return firebase.storage()
}


const qty =  (q) => {

  let aux = 0
  aux= cartQty + q;
  setCartQty(aux);

}

import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}

*/