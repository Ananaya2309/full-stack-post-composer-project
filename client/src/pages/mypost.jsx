import {useEffect,useState} from "react";
import axios from "axios";
import "../css/mypost.css";

function MyPosts() {

const posts=[

{
id:1,
title:"Summer Sale",
platform:"Instagram",
status:"Published",
date:"20 July"
},

{
id:2,
title:"New Product Launch",
platform:"Facebook",
status:"Scheduled",
date:"25 July"
},

{
id:3,
title:"Festive Offer",
platform:"LinkedIn",
status:"Draft",
date:"28 July"
}

];

return(

<div className="myposts">

<h1>My Posts</h1>

<table>

<thead>

<tr>

<th>Title</th>

<th>Platform</th>

<th>Status</th>

<th>Date</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

posts.map((item)=>(

<tr key={item.id}>

<td>{item.title}</td>

<td>{item.platform}</td>

<td>{item.status}</td>

<td>{item.date}</td>

<td>

<button>Edit</button>

<button>Delete</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default MyPosts;