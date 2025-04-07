import Layout from "~/components/Layout";
import "../styles.css";

export default function Index() {
  return (
    <Layout>
      <img src="/mockImage/Secretos-en-red-inicio.webp" alt="" />
      <main className="container mx-auto p-4">
        <section className="mb-8">
          
          <div className="flex overflow-x-auto">
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="/mockImage/A-que-te-cojo-raton.png " alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="/mockImage/Con-los-pelos-de-punta.png" alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="/mockImage/Cuentos-maravillosos.png" alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="/mockImage/Cuentos-para-desenredar-enredos.png" alt="" />
            </div>
          </div>
          <div className="text-center mt-4"id="nosotros">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Ver más
            </button>
          </div>
        </section>

        <section className="mb-8 bg-blue-200 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-4 rounded">
              <img src="/mockImage/Cuentos-para-desenredar-enredos.png" alt="" />
            </div>

            <div className="p-4 roundeb ">
              <h1 className="text-center font-bold mb-2"> Nosotros</h1>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos sapiente fugit obcaecati, alias eius quaerat, corporis officia assumenda ratione et cupiditate, aspernatur dolore repellat omnis accusantium tempora labore cum nobis distinctio nulla? Nesciunt ab aperiam nostrum, labore quisquam, itaque incidunt magnam ipsum explicabo ut omnis. Animi omnis laborum odit, hic repudiandae vel? Eius tenetur autem quibusdam quidem reprehenderit sapiente tempore laborum, doloremque voluptatem, provident aperiam corrupti id atque saepe nesciunt! Voluptas beatae aut dolorem eveniet minus! Perspiciatis, velit laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias architecto
                     quisquam commodi optio ipsum repellat fugiat eius tempore! Nulla, et, beatae labore optio minima voluptatum 
                     distinctio totam eum esse qui expedita quam sequi provident blanditiis quo 
                    deserunt aliquam magnam vel tempore similique cum pariatur itaque quisquam. Nam, tempora eos.
                </p>
            </div>
          </div>
        </section>
        <h1 className="bg-blue-200 text-center " >Aliados</h1>
        <section className="grid grid-cols-4 gap-4 mt-4"id="aliados">
          
          <div className="bg-blue-200 p-4 rounded">
          <img src="/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="/mockImage/logo-principal.png" alt="" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
//
