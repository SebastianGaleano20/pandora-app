import "./Nosotros.css";
import ub from "../assets/ub.png"
export function Nosotros() {
  return (
    <div className="container-all">
      <div className="container-us">
        <div className="cont-home">
          <h1>Pandora Panificados</h1>
          <h4>
            ¡Bienvenidos a nuestra panificadora, el proveedor mayorista de
            confianza para tu negocio! Desde 1990, nos hemos dedicado a la
            producción y distribución de productos panificados de alta calidad a
            comercios locales. En nuestra panificadora, nos enorgullecemos de
            mantener viva la tradición panadera, combinando técnicas artesanales
            con equipos modernos para ofrecer productos consistentemente
            deliciosos y frescos. Sabemos lo importante que es para tu negocio
            contar con un proveedor confiable y consistente, por eso nos
            esforzamos por cumplir con tus expectativas en cada entrega. Confía
            en nosotros para abastecer tu negocio con el mejor pan artesanal.
            ¡Contáctanos hoy mismo y descubre por qué somos el socio ideal para
            tu empresa!
          </h4>
        </div>
      </div>
      <div className="cont-inf">
        <h1>Mas informacion</h1>
        <p>
          Para poder realizar tu pedido contactate con nostros mediante los
          diferentes metodos de comunicacion que te brindamos para tu comodidad.
          Teniendo en cuenta el tiempo necesario que requiere cada producto
          seleccionado. Realizamos artesanalmente cada uno de los items que se
          ve reflejado en nuestra lista de productos. Nos ocupamos de las
          entregas personalmente, en caso contrario podemos brindarles otros
          metodos de entrega de ser necesario para el retiro de su pedido.
        </p>
        <div className="cont-red">
          <h2>¡Comunicate con nosotros!</h2>
          <p>
            <a href="#">Instagram</a>
          </p>
          <p>
            <a href="#">Email</a>
          </p>
        </div>
        <div className="cont-ub">
          <h2>Ubicacion</h2>
          <p>
            Nos ubicamos en el barrio de Villa Crespo, Trabajamos todos los dias
            a excepcion de dias festivos.
          </p>
          <a href="https://www.google.com.ar/maps/@-34.604366,-58.4579997,20z?entry=ttu"><img src={ub} alt="ubicacion"/></a>
        </div>
      </div>
    </div>
  );
}
