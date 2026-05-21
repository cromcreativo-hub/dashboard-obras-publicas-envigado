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
["Reportes","12","100%"]
]
}
};

export default function Home(){

const [modulo,setModulo]=useState("Inicio");
const [busqueda,setBusqueda]=useState("");
const [menu,setMenu]=useState(false);

const info=datos[modulo as keyof typeof datos];

const modulos=Object.keys(datos).filter(
m=>m.toLowerCase()
.includes(busqueda.toLowerCase())
);

function descargar(){

const blob=new Blob(
[JSON.stringify(info,null,2)],
{type:"text/plain"}
);

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;
a.download=`${modulo}.txt`;
a.click();

URL.revokeObjectURL(url);

}

return(

<div className="flex flex-col md:flex-row min-h-screen bg-slate-200">

{/* MENU MOVIL */}

<div className="
md:hidden
bg-blue-950
text-white
flex
justify-between
items-center
p-4
">

<h1>🚧 Obras Públicas</h1>

<button
onClick={()=>setMenu(!menu)}
>
☰
</button>

</div>



{/* SIDEBAR */}

<aside className={`

bg-blue-950
text-white
p-6
md:w-72

${menu ? "block":"hidden"}

md:block

`}>

<h1 className="text-4xl font-bold">

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
text-black
rounded-lg
p-3
mt-8

"

/>



<div className="flex flex-col gap-2 mt-8">

{

modulos.map(

m=>(

<Menu

key={m}

titulo={m}

activo={modulo===m}

click={()=>{

setModulo(m);

setMenu(false);

}}

/>

)

)

}

</div>

</aside>



{/* CONTENIDO */}

<section className="flex-1 p-6 md:p-8">

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
px-8
py-4
rounded-lg
w-full
md:w-auto

"

>

Descargar reporte

</button>

</div>



{/* KPIS */}

<div className="

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
mt-10

">

<Card titulo="Indicadores" valor={info.indicadores}/>
<Card titulo="Metas" valor={info.metas}/>
<Card titulo="Obras" valor={info.obras}/>
<Card titulo="Terminadas" valor={info.terminadas}/>

</div>



{/* TABLA */}

<div className="

bg-white
rounded-xl
shadow
p-8
mt-10

">

<h2 className="

text-3xl
font-bold
text-slate-900

">

Últimos indicadores

</h2>



<div className="overflow-x-auto">

<table className="w-full mt-8">

<thead>

<tr className="border-b">

<th className="text-left py-4 text-slate-900">
Módulo
</th>

<th className="text-left py-4 text-slate-900">
Meta
</th>

<th className="text-left py-4 text-slate-900">
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
className="border-b"
>

<td className="py-4 text-slate-700">
{item[0]}
</td>

<td className="py-4 text-slate-700">
{item[1]}
</td>

<td className="py-4 text-slate-700">
{item[2]}
</td>

</tr>

)

)

}

</tbody>

</table>

</div>

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

<p className="text-slate-500">

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