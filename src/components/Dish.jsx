import { useState } from "react";
import '../styles/Dish.css'

const Dish = () => {
    //database
    let list = [
        {
            img: "image/bi.jpg",
            name: "Biriyani",
            id:1
        },
        {
            img: "image/bu.jpg",
            name: "Burger",
            id:2,
        },
        {
            img: "image/ch.jpg",
            name: "Chicken",
            id:3
        },
        {
            img: "image/roll.jpg",
            name: "Roll",
            id:4
        },
        {
            img: "image/san.jpg",
            name: "Sandwich",
            id:5
        },
        {
            img:"image/pi.jpg",
            name:"Pizza",
            id:6
        }
    ]
    let [listData, setData]=useState(list)
    let handleRemove=(id,name)=>{
        setData(listData.filter(x=>x.id !=id))
        alert(`${name} has been removed ${id}`)
    }
    return (
        <div className="main">
             <h1>Favourites List</h1>
        <div className="dish">
           
            {listData.map(data => (
                <div className="dish_lists">
                    <div className="image">
                    <img src={data.img} alt=""/>
                    </div>
                    <div className="info">
                        <h1>{data.name}</h1>
                        <button onClick={()=>handleRemove(data.id,data.name)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Dish;