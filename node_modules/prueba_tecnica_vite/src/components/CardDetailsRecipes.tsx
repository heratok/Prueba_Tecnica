import { useAppStore } from '../store/Appstate';

function CardDetailsRecipes() {
  const detailRecipe = useAppStore((state) => state.DetailsRecipe);


  if (!detailRecipe) {
    return <div>Cargando detalles de la receta...</div>;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex h-auto font-sans rounded-lg shadow-lg lg:w-auto">
        <div className="flex-none lg:w-[300px]  relative">
          <img
            src={detailRecipe.img}
            alt="Product"
            className="absolute inset-0 w-full h-full rounded-l-lg"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <p className="flex-auto text-lg font-semibold text-slate-900">
              {detailRecipe.title}
            </p>
          </div>
          <div className="h-48">
            <p>healthScore: {detailRecipe.healthScore}%</p>
            <br />
            <p>Regular price per serving: ${detailRecipe.pricePerServing}</p>
            <br />
            <p>Source Name by: {detailRecipe.sourceName}</p>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardDetailsRecipes;
