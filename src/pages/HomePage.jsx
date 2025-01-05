import { IoIosShareAlt } from "react-icons/io";
import HomeCard from "../components/HomeCard";
import HomeGrid1 from "../components/HomeGrid1";
import HomeGrid2 from "../components/HomeGrid2";
import HomeGrid3 from "../components/HomeGrid3";
import HomeGrid4 from "../components/HomeGrid4";
import HomeGrid5 from "../components/HomeGrid5";
import HomeGrid6 from "../components/HomeGrid6";
import HomeGrid7 from "../components/HomeGrid7";
import HomeGrid8 from "../components/HomeGrid8";
const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="route">You are here: Home</div>

        <div className="container">
          <img src="/images/french-bulldogs-for-sale-534-1.jpg" />
          <div className="write-up">
            <h1>SOUTHEAST ELITE FRENCHIES BULLDOGS</h1>
            <p className="first-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus distinctio quod quidem ipsa rem laborum. Ut,
              repellat illo. Recusandae, quae? Fuga error quas ipsam dignissimos
              dolore assumenda id adipisci, ducimus, sed exercitationem est a
              nostrum, rem cupiditate accusantium maiores animi mollitia
              doloribus! Iure, quasi quaerat!
            </p>
            <p className="first-p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              culpa, non veniam harum natus reprehenderit amet inventore
              reiciendis quis magni ullam tenetur accusantium ducimus distinctio
              consequatur tempore eos sint aut ea. Ab maxime explicabo excepturi
              tempore laborum distinctio praesentium atque. Quasi fugiat
              dignissimos, delectus repellendus, nulla unde iusto, dolorem neque
              placeat sapiente aliquid beatae corrupti.
            </p>
            {/* <img
              src="/images/french-bulldogs-for-sale-534-1.jpg"
              alt=""
              className="mid"
            /> */}
            <div className="available">
              <img src="/images/available.jpg" alt="" />
              <div className="overlay">
                <div className="icon-div">
                  <IoIosShareAlt className="icon" />
                </div>
              </div>
            </div>
            <h1>AKC FRENCHIE PUPPIES </h1>
            <p className="linkup">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              provident molestiae sed quia eligendi voluptatem corrupti unde
              accusamus autem maxime dicta dignissimos harum aliquid inventore,
              nostrum hic sit, eius expedita a aperiam enim?
            </p>
            <h1>SOUTHEAST FRENCH BULLDOG </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              provident molestiae sed quia eligendi voluptatem corrupti unde
              accusamus autem maxime dicta dignissimos harum aliquid inventore,
              nostrum hic sit, eius expedita a aperiam enim? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Facilis labore odit
              pariatur quaerat cupiditate voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              nesciunt natus accusantium odit asperiores temporibus, maiores
              amet! Laboriosam natus distinctio voluptatum magnam iusto cum
              repellendus recusandae animi? Hic, magnam ipsum atque perferendis
              ipsa aliquam vero rem ullam maiores error architecto aliquid,
              consectetur provident ab cupiditate?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime obcaecati itaque ea placeat
              tempora, explicabo blanditiis officiis distinctio recusandae esse?
            </p>
            <h1>AKC FRENCHIE PUPPIES </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              provident molestiae sed quia eligendi voluptatem corrupti unde
              accusamus autem maxime dicta dignissimos harum aliquid inventore,
              nostrum hic sit, eius expedita a aperiam enim?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              nesciunt natus accusantium odit asperiores temporibus, maiores
              amet! Laboriosam natus distinctio voluptatum magnam iusto cum
              repellendus recusandae animi? Hic, magnam ipsum atque perferendis
              ipsa aliquam vero rem ullam maiores error architecto aliquid,
              consectetur provident ab cupiditate?
            </p>
          </div>
          <div className="cards">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
          <div className="grids">
            <HomeGrid1 />
            <HomeGrid2 />
            <HomeGrid3 />
            <HomeGrid4 />
            <HomeGrid5 />
            <HomeGrid6 />
            <HomeGrid7 />
            <HomeGrid8 />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
