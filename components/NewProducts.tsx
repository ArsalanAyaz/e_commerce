import React from 'react'
import ProductCard from './ProductCard';


const ProductsData = [

{
    img : "/jacket-1.jpg",
    title : "Jacket",
    desc : "Full zip jacket",
    rating : 4 ,
    price : "45.00"
},
{
    img : "/jacket-2.jpg",
    title : "Jacket",
    desc : "Full zip jacket",
    rating : 3 ,
    price : "50.00"
},
{
    img : "/party-wear-1.jpg",
    title : "Heels",
    desc : "Party wear Heels",
    rating : 4 ,
    price : "65.00"
},
{
    img : "/shirt-1.jpg",
    title : "Men shirts",
    desc : "Full zip jacket",
    rating : 3 ,
    price : "65.00"
},
{
    img : "/skirt-1.jpg",
    title : "Wowen Skirts",
    desc : "Women skirts",
    rating : 4 ,
    price : "35.00"
},
{
    img : "/sport-1.jpg",
    title : "SHOES",
    desc : "sport shoes",
    rating : 3 ,
    price : "75.00"
},
{
    img : "/watch-1.jpg",
    title : "Watch",
    desc : "Beautiful hand watch",
    rating : 4 ,
    price : "48.00"
},
{
    img : "/watch-2.jpg",
    title : "Watch",
    desc : "Hand watch",
    rating : 3 ,
    price : "35.00"
},


];

export const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
                lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>

                {ProductsData.map((item, index) =>

                <ProductCard
                key   = {index}
                img   = {item.img}
                title = {item.title}
                desc  = {item.desc}
                rating= {item.rating}
                price = {item.price}
                
                />)};



                </div>
        </div>
    </div>
  )
}
