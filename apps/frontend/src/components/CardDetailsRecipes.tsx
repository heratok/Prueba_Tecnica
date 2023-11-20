import React from 'react';
import { useAppStore } from '../store/Appstate';
import { shallow } from 'zustand/shallow';

function CardDetailsRecipes() {
  const detailRecipe = useAppStore((state) => state.DetailsRecipe);


  if (!detailRecipe) {
    return <div>Cargando detalles de la receta...</div>;
  }

  return (
    <div>
      <h1>{detailRecipe.title}</h1>
      {/* Mostrar otros detalles de la receta según sea necesario */}
    </div>
  );
}

export default CardDetailsRecipes;
