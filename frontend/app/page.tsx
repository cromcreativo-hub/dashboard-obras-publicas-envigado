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
const [buscar,setBuscar]=useState("");

const modulos=
Object.keys(datos).filter(x=>
x.toLowerCase()
.includes(buscar.toLowerCase())
);

const info=
datos[modulo as keyof typeof datos];


function descargar(){

const blob=
new Blob(
[JSON.stringify(info,null,2)],
{type:"text/plain"}
);

const url=
URL.createObjectURL(blob);

const a=
document.createElement("a");

a.href=url;
a.download=`${modulo}.txt`;
a.click();

}


return(

<div className="flex flex-col lg:flex-row min-h-screen bg-slate-200">


{/* MENU */}

<aside className="

w-full
lg:w-72
bg-blue-950
text-white
p-6

">

<h1 className="text-4xl font-bold">

🚧 Obras Públicas

</h1>

<p className="text-slate-300">

Envigado

</p>


<input

value={buscar}

onChange={(e)=>
setBuscar(e.target.value)
}

placeholder="Buscar módulo..."

className="

w-full
mt-8
p-3
rounded-lg
text-slate-900
bg-white

"

/>



<div className="mt-8 flex flex-col gap-2">

{

modulos.map(item=>(

<button

key={item}

onClick={()=>setModulo(item)}

className={`

p-4
rounded-lg
text-left

${

modulo===item

?

"bg-blue-700"

:

"hover:bg-blue-800"

}

`}

>

{item}

</button>

))

}

</div>

</aside>



{/* CONTENIDO */}

<section className="flex-1 p-5 md:p-8">


<div className="
flex
flex-col
md:flex-row
justify-between
gap-5
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
px-8
py-4
rounded-lg

"

>

Descargar reporte

</button>

</div>



{/* TARJETAS */}

<div className="

grid
grid-cols-2
xl:grid-cols-4
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
mb-8
">

Últimos indicadores

</h2>


<table className="
w-full
min-w-[500px]
">

<thead>

<tr className="
border-b
text-slate-900
">

<th className="

text-left
p-3
font-bold

">

Módulo

</th>


<th className="

text-left
p-3
font-bold

">

Meta

</th>


<th className="

text-left
p-3
font-bold

">

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
">

{titulo}

</p>

<h2 className="
text-5xl
font-bold
text-slate-900
">

{valor}

</h2>

</div>

)

}