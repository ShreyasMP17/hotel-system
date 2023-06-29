import { useState } from "react";
import '../styles/rest.css'

const Rest = () => {
    let list =[
        {
            img:"image/dom.jpg",
            name:"Domino's",
            id:1
        },
        {
            img:"image/leo.jpg",
            name:"Leon's",
            id:2
        },
        {
            img:"image/truffles.jpg",
            name:"Truffles",
            id:3
        },
        {
            img:"image/emp.jpg",
            name:"Empire",
            id:4
        },
        {
            img:"image/kfc.jpg",
            name:"KFC",
            id:5
        },
        {
            img:"image/mcd.jpg",
            name:"McDonald's",
            id:6
        },
    ]
    let [listrest, setData]=useState(list)
    let handleRemove=(id,name)=>{
        setData(listrest.filter(x=>x.id !=id))
        alert(`${name} has been removed ${id}`)
    }
    return ( 
        <div className="mainn">
            <h1>Top Brands For You</h1>
            <div className="rest">
            {listrest.map(data=>(
                <div className="rest_lists">
                    <img src={data.img} alt="" />
            
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
 
export default Rest;