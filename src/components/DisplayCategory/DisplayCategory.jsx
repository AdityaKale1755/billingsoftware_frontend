import './DisplayCategory.css';

import React from 'react';
import Category from "../Category/Category.jsx";
import {assests} from "../../assets/Assests.js";

const DisplayCategory = ({categories,setSelectedCategory,selectedCategory}) => {
    return (
        <div className="row gap-3" style={{width:'100%',margin:0}}>
            <div className="col-md-3 col-sm-6" key="all" style={{padding:'0 10px'}}>
               <Category
                 categoryName="All Items"
                 imgUrl={assests.device}
                 numberOfItems={categories.reduce((acc,cat)=>acc+ cat.items, 0)}
                 bgColor="#6c757d"
                 isSelected={selectedCategory === ""}
                 onClick={() => {setSelectedCategory("")}}
               />
            </div>
            {categories.map(category => (
                <div className="col-md-3 col-sm-6" key={category.CategoryId} style={{padding:'0 10px'}}>
                    <Category
                       categoryName={category.name}
                       imgUrl={category.imgUrl}
                       numberOfItems={category.items}
                       bgColor={category.bgColor}
                       isSelected={selectedCategory === category.categoryId}
                       onClick={() => {setSelectedCategory(category.categoryId)}}
                    />
                </div>
            ))}
        </div>
    );
};

export default DisplayCategory;