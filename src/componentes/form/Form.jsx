import { useContext} from "react";
import { StoreContext } from "../../context/StoreContext";
import "./form.scss";


function Form () {

    const {form, setForm} = useContext(StoreContext);

    return(

    <div className="checkoutform">
            <form action="#">
                
                <label htmlFor="name" >Nombre:</label>
                <input type="text"  required  name="name" id="name" onInput={(e) => {setForm({...form, name:(e.target.value).toLowerCase()})}}/>
                <label htmlFor="lastname" >Apellido:</label>
                <input type="text" required name="lastname" id="lastname"  onInput={(e) => {setForm({...form, lastname:(e.target.value).toLowerCase()})}}/>
                <label htmlFor="dni" >Dni</label>
                <input type="text" required name="dni" id="dni" placeholder="sin puntos ni espacios" onInput={(e) => {setForm({...form, idnr:e.target.value})}}/>
                <label htmlFor="email" >Correo Electrónico:</label>
                <input type="email" required name="email" id="email"  onInput={(e) => {setForm({...form, email:(e.target.value).toLowerCase()})}}/>
                <label htmlFor="email" >Confirmar Correo Electrónico:</label>
                <input type="email" required name="emailcheck" id="emailcheck"  onInput={(e) => {setForm({...form, emailcheck:(e.target.value).toLowerCase()})}}/>
                <label htmlFor="tel" >Teléfono:</label>
                <input type="tel" required name="tel" id="tel" placeholder="sin guiones ni espacios" onInput={(e) => {setForm({...form, tel:e.target.value})}}/>
                <input className="resetbtn" type="reset" value="Limpiar Formulario"/>
                


            </form>
    </div>

) };

export default Form;