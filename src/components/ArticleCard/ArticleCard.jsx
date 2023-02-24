import React from "react";
import "./ArticleCard.css";
function ArticleCard(props) {
  const { data, functions,articleIndex,isSelected } = props;
  const { image, title } = data;
  const { handelAddArticle } = functions;
  return (
    <div className="article rounded-2xl bg-gray-50 shadow-2xl w-1/4 flex flex-col justify-center items-center py-4 h-[300px]  text-center gap-7 mb-[72px] z-3">
      <div
        className={
          "img w-5/6 relative z-10 mt-[-72px] shadow-xl rounded-2xl bg-cover h-[180px]"
        }
        style={{ backgroundImage: `url(${image})` }}
      >
        <img
          src={image}
          className="z-3 relative rounded-2xl hidden"
          alt={title}
        />
      </div>
      <h2 className="font-black w-5/6 text-gray-500 mt-3">{title}</h2>
      <button className="bg-gray-300 text-white rounded-md px-4 py-2 mb-1 min-w-[100px] disabled:bg-yellow-400 disabled:text-black" disabled={isSelected} onClick={()=>{handelAddArticle(articleIndex)} }>
        {(isSelected)? 'افزوده شد': 'افزودن'}
      </button>
    </div>
  );
}

export default ArticleCard;
