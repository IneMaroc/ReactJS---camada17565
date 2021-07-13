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
*/

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
