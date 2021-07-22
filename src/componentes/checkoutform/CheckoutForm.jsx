import "./checkoutform.scss"

function CheckoutForm () {

return(

<div className="main">
        <form action="#">

            <label htmlfor="name">Nombre:</label>
            <input type="text" name="name" id="name" required/>
            <label for="apellido">Apellido:</label>
            <input type="text" name="apellido" id="apellido" required/>
            <label for="dni">Dni</label>
            <input type="text" name="dni" id="dni" required/>
            <label for="email">Correo Electrónico:</label>
            <input type="email" name="email" id="email" required/>
            <label for="tel">Teléfono:</label>
            <input type="text" name="tel" id="tel" required/>
            <input id="boton" type="reset" value="Limpiar Formulario"/>
            <input id="boton" type="submit" value="Pagar por Mercado Pago"/>


        </form>
</div>

) };

export default CheckoutForm;