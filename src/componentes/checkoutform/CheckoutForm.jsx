import { useContext} from "react";
import { StoreContext } from "../../context/StoreContext";
import "./checkoutform.scss";


function CheckoutForm () {

    const {form, setForm} = useContext(StoreContext);

    return(

    <div className="main">
            <form action="#">

                <label htmlFor="name">Nombre:</label>
                <input type="text"  required  name="name" id="name" onInput={(e) => {setForm({...form, name:e.target.value})}}/>
                <label htmlFor="lastname">Apellido:</label>
                <input type="text" required name="lastname" id="lastname"  onInput={(e) => {setForm({...form, lastname:e.target.value})}}/>
                <label htmlFor="dni">Dni</label>
                <input type="text" required name="dni" id="dni"  onInput={(e) => {setForm({...form, idnr:e.target.value})}}/>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" required name="email" id="email"  onInput={(e) => {setForm({...form, email:e.target.value})}}/>
                <label htmlFor="tel">Teléfono:</label>
                <input type="tel" required name="tel" id="tel" onInput={(e) => {setForm({...form, tel:e.target.value})}}/>
                <input id="boton" type="reset" value="Limpiar Formulario"/>
                


            </form>
    </div>

) };

export default CheckoutForm;