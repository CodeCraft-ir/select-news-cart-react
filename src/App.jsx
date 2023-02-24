import React, { useState } from "react";
import ArticleCard from "./components/ArticleCard/ArticleCard.jsx";
import { data } from "./data/component-practice-data.js";
function App(props) {
  const [selectedArticles, setSelectedArticles] = useState([]);
  const handelAddArticle = (index) => {
    const newSelectedArticles = [...selectedArticles]
    if(!newSelectedArticles.includes(index)) { newSelectedArticles.push(index)}
    setSelectedArticles(newSelectedArticles)
  };
  return (
    <div className="w-screen  bg-gray-200 font-sans">
      <div className="container mx-auto flex justify-center items-center p-5 gap-5 flex-row-reverse">
        <h3 className="">مقالات اضافه شده</h3>
        <span className="text-black bg-yellow-400 rounded-full px-3 py-1 pt-2">
          {selectedArticles.length}
        </span>
      </div>
      <div className="articles container flex flex-wrap gap-3 justify-center mx-auto px-8 py-32">
        {data.map((item, index) => {
          return (
            
            <ArticleCard
              data={item}
              key={index}
              articleIndex={index}
              isSelected={selectedArticles.includes(index)}
              functions={{ handelAddArticle }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
