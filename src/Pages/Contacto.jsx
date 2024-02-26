import './Contacto.css'

export function Contacto() {
  return (
    <section>
          <form action="">
            <label htmlFor="Nombre">Nombre: </label>
            <input type="text" placeholder='Ingrese su nombre' />
            <label htmlFor="Apellido">Apellido: </label>
            <input type="text" name="Apellido" placeholder='Ingrese su apellido' />
            <label htmlFor="Email">Email: </label>
            <input type="email" placeholder='Ingrese un email' />
            <label htmlFor="Telefono">Tel: </label>
            <input type="tel" placeholder='Ingrese su numero' />
            <label htmlFor="Mensaje">Mensaje: </label>
            <textarea name="Mensaje" id="Mensaje" cols="30" rows="10"></textarea>
            <button>Enviar  </button>
          </form>
        </section>
  );
}
