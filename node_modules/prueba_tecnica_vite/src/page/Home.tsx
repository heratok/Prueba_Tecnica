  import { useEffect } from "react";
  import { useAppStore } from "../store/Appstate";
  import Recipes from "../components/Recipes";
  export function Home() {
    
    const { getallRecipes } = useAppStore();
    //getData();

    useEffect(() => {
      getallRecipes();
    }, []);
    return (
        <Recipes />
    );
  }
