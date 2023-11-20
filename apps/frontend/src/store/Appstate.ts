import { create } from "zustand";

interface CardRecipe {
  id: number;
  title: string;
  img: string;
}

interface DetailsRecipe {
  id: number;
  title: string;
  img: string;
  sourceName: string;
  healthScore: number;
  pricePerServing: number;
  vegetarian: boolean;
}

interface State {
  Recipes: CardRecipe[]; // Ajusta el tipo según la respuesta de tu API
  DetailsRecipe: DetailsRecipe;

}
type Action = {
  getDetailsRecipe: (id : number) => Promise<void>;
  getallRecipes: () => Promise<void>;

}

export const useAppStore = create<State & Action>((set) => ({
  Recipes: [],
  DetailsRecipe: { id: 0, title: "", img: "", sourceName: "", healthScore: 0, pricePerServing: 0, vegetarian: false },
  getallRecipes: async () => {
    try {
      const response = await fetch(
        'https://api.spoonacular.com/recipes/random?number=20',
        {
          method: "GET",
          headers: {
            "X-Api-Key": "ce62d7fc48a14e09b6fc0275232c514c",
            "Content-Type": "application/json", // Puedes ajustar el tipo de contenido según tus necesidades
          },
        }
      );
      const data = await response.json();
      if (data.recipes && Array.isArray(data.recipes)) {
        const simplifiedData: CardRecipe[] = data.recipes.map((item: any) => ({
          id: item.id,
          title: item.title,
          img: item.image
            ? item.image
            : "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png",
        }));
        set({ Recipes: simplifiedData });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  getDetailsRecipe: async (id: number) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'ce62d7fc48a14e09b6fc0275232c514c',
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      if (data) {
        const simplifiedData: DetailsRecipe = {
          id: data.id,
          title: data.title,
          sourceName: data.sourceName,
          healthScore: data.healthScore,
          pricePerServing: data.pricePerServing,
          vegetarian: data.vegetarian,
          img: data.image
            ? data.image
            : 'https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png',
        };

        set({ DetailsRecipe: simplifiedData });
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  },
}));
