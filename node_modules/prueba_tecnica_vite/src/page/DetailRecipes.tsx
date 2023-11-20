import  { useEffect } from 'react';
import { useAppStore } from '../store/Appstate';
import CardDetailsRecipes from '../components/CardDetailsRecipes';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

interface RouteParams {
  id?: string; // Haz que id sea opcional
}

function DetailRecipes() {
  const { id }: RouteParams = useParams();;
  const { getDetailsRecipe } = useAppStore();

  useEffect(() => {
    // Asegúrate de que id sea un número
    const recipeId = parseInt(id || '', 10);

    if (!isNaN(recipeId)) {
      // Solo llama a getDetailsRecipe si el id es un número válido
      getDetailsRecipe(recipeId);
    }
  }, [id]);

  return (
    <div>
      <CardDetailsRecipes />
      <Footer/>
    </div>
  );
}

export default DetailRecipes;
