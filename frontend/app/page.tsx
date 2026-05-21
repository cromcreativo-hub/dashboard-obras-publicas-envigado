"use client";

import { useState } from "react";

const datos = {
  Inicio:{
    indicadores:120,
    metas:48,
    obras:21,
    terminadas:93,
    tabla:[
      ["Malla vial","1200 ton","80%"],
      ["Andenes","15 sectores","65%"]
    ]
  },

  Indicadores:{
    indicadores:320,
    metas:80,
    obras:40,
    terminadas:100,
    tabla:[
      ["Indicadores activos","320","95%"],
      ["Metas","80","70%"]
    ]
  },

  "Malla vial":{
    indicadores:90,
    metas:1200,
    obras:12,
    terminadas:40,
    tabla:[
      ["Parcheo","1200 ton","80%"],
      ["Repavimentación","8 sectores","60%"]
    ]
  },

  Andenes:{
    indicadores:45,
    metas:15,
    obras:5,
    terminadas:8,
    tabla:[
      ["Andenes priorizados","15","65%"]
    ]
  },

  Subsidios:{
    indicadores:400,
    metas:350,
    obras:0,
    terminadas:0,
    tabla:[
      ["Subsidios vivienda","400","90%"]
    ]
  },

  Reportes:{
    indicadores:12,
    metas:12,
    obras:12,
    terminadas:12,
    tabla:[
      ["Reportes generados","12","100%"]
    ]
  }
};

export default function Home(){

const [modulo,setModulo]=useState("Inicio");
const [busqueda,setBusqueda]=useState("");

const menus=Object.keys(datos);

const filtrados=
menus.filter(item=>
item.toLowerCase()
.includes(busqueda.toLowerCase())
);

const info=
datos[modulo as keyof typeof datos];


function descargar(){

const contenido=
JSON.stringify(info,null,2);

const blob=
new Blob(
[contenido],
{type:"text/plain"}
);

const url=
URL.createObjectURL(blob);

const a=
document.createElement("a");

a.href=url;
a.download=`${modulo}.txt`;

a.click();

URL.revokeObjectURL(url);

}

return(

<div className="flex flex-col md:flex-row min-h-screen bg-slate-200">


{/* MENU */}

<aside className="w-full md:w-72 bg-blue-950 text-white p-6">

<h1 className="text-3xl font-bold">

🚧 Obras Públicas

</h1>

<p className="text-slate-300">

Envigado

</p>



<input

value={busqueda}

onChange={(e)=>

setBusqueda(e.target.value)

}

placeholder="Buscar módulo..."

className="

w-full
bg-white
text-slate-900
rounded-lg
p-3
mt-8

"

/>



<div className="flex flex-col gap-2 mt-8">

{

filtrados.map(item=>(

<Menu

key={item}

titulo={item}

activo={modulo===item}

click={()=>

setModulo(item)

}

/>

))

}

</div>

</aside>



{/* CONTENIDO */}

<section className="flex-1 p-6">

<div className="
flex
flex-col
md:flex-row
justify-between
gap-4
">

<div>

<h1 className="
text-5xl
md:text-7xl
font-bold
text-slate-900
">

{modulo}

</h1>

<p className="text-slate-600">

Secretaría Obras Públicas Envigado

</p>

</div>


<button

onClick={descargar}

className="

bg-blue-900
text-white
rounded-lg
px-8
py-4
hover:bg-blue-700

"

>

Descargar reporte

</button>

</div>



{/* KPI */}

<div className="
grid
grid-cols-2
lg:grid-cols-4
gap-5
mt-10
">

<Card
titulo="Indicadores"
valor={info.indicadores}
/>

<Card
titulo="Metas"
valor={info.metas}
/>

<Card
titulo="Obras"
valor={info.obras}
/>

<Card
titulo="Terminadas"
valor={info.terminadas}
/>

</div>



{/* TABLA */}

<div className="
bg-white
rounded-xl
shadow
p-6
mt-10
overflow-x-auto
">

<h2 className="
text-3xl
font-bold
text-slate-900
mb-6
">

Últimos indicadores

</h2>


<table className="
w-full
min-w-[500px]
text-slate-800
">

<thead>

<tr className="
border-b
font-bold
">

<th className="text-left p-2">

Módulo

</th>

<th className="text-left p-2">

Meta

</th>

<th className="text-left p-2">

Avance

</th>

</tr>

</thead>



<tbody>

{

info.tabla.map(

(item,index)=>(

<tr
key={index}

className="

border-b
text-slate-700

"

>

<td className="p-3">

{item[0]}

</td>

<td className="p-3">

{item[1]}

</td>

<td className="p-3">

{item[2]}

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

</section>

</div>

)

}



function Menu({

titulo,
click,
activo

}:any){

return(

<button

onClick={click}

className={`

p-4
rounded-lg
text-left
transition

${
activo

?

"bg-blue-700"

:

"hover:bg-blue-800"

}

`}

>

{titulo}

</button>

)

}



function Card({

titulo,
valor

}:any){

return(

<div className="
bg-white
rounded-xl
shadow
p-6
">

<p className="
text-slate-500
text-sm
">

{titulo}

</p>

<h2 className="
text-5xl
font-bold
text-slate-900
mt-2
">

{valor}

</h2>

</div>

)

}