
  import { useAppStore } from "../store/Appstate";
  import { shallow } from "zustand/shallow";
  import { Link } from "react-router-dom";


  function Recipes() {
    const Recipes = useAppStore((state) => state.Recipes);


    return (
      <div className="relative w-full ">
        <div className="z-20 grid grid-cols-2 mt-4 products xl:grid-cols-5 lg:grid-cols-3 gap-9 ">
          {Recipes.map(({ id,img, title }) => (
            <Link to={`DetailsRecipe/${id}`}
              key={id}
              className="rounded-lg duration-300 hover:scale-95 product h-[300px] bg-white   drop-shadow-2xl   border"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[60%] object-cover rounded-lg  "
              />
              <div className="p-2 m-2 rounded-lg">
                <h1 className="mb-4 text-xl font-semibold">
                  <p>{title}</p>
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  export default Recipes;
