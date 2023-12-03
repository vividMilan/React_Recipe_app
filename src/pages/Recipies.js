import React from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

const Recipies = () => {
  const recipies = [
    {
      title: "Chicken Pan Pizza",
      image: "/img/gallery/img_1.jpg",
      authorImage: "/img/top-chefs/img_1.jpg",
    },
    {
      title: "Speghetti and Meatballs",
      image: "/img/gallery/img_4.jpg",
      authorImage: "/img/top-chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/img/gallery/img_5.jpg",
      authorImage: "/img/top-chefs/img_3.jpg",
    },
    {
      title: "Mutton Briyani",
      image: "/img/gallery/img_6.jpg",
      authorImage: "/img/top-chefs/img_1.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/img/gallery/img_10.jpg",
      authorImage: "/img/top-chefs/img_6.jpg",
    },
    {
      title: "Mutton Briyani",
      image: "/img/gallery/img_6.jpg",
      authorImage: "/img/top-chefs/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="recipies-container">
        {recipies.map((recipe, index) => (
          <RecipeCard 
            key={index}
            recipe = {recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipies;
