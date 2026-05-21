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
const info=datos[modulo as keyof typeof datos];

function descargar(){

const contenido=JSON.stringify(info,null,2);

const blob=new Blob(
[contenido],
{type:"text/plain"}
);

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;
a.download=`${modulo}.txt`;

a.click();

}

return(

<div className="flex min-h-screen bg-slate-200">

{/* MENU */}

<aside className="w-72 bg-blue-950 text-white p-6">

<h1 className="text-4xl font-bold">
🚧 Obras Públicas
</h1>

<p className="text-slate-300">
Envigado
</p>


<input
placeholder="Buscar módulo..."
className="
w-full
bg-white
text-slate-800
rounded-lg
p-3
mt-8
"
/>



<div className="flex flex-col gap-3 mt-8">

<Menu titulo="Inicio" click={()=>setModulo("Inicio")} />
<Menu titulo="Indicadores" click={()=>setModulo("Indicadores")} />
<Menu titulo="Malla vial" click={()=>setModulo("Malla vial")} />
<Menu titulo="Andenes" click={()=>setModulo("Andenes")} />
<Menu titulo="Subsidios" click={()=>setModulo("Subsidios")} />
<Menu titulo="Reportes" click={()=>setModulo("Reportes")} />

</div>

</aside>



<section className="flex-1 p-8">

<div className="flex justify-between">

<div>

<h1 className="text-6xl font-bold text-slate-900">

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

rounded-lg

hover:bg-blue-700

"

>

Descargar reporte

</button>

</div>



{/* KPIS */}

<div className="grid md:grid-cols-4 gap-6 mt-10">

<Card titulo="Indicadores" valor={info.indicadores}/>

<Card titulo="Metas" valor={info.metas}/>

<Card titulo="Obras" valor={info.obras}/>

<Card titulo="Terminadas" valor={info.terminadas}/>

</div>



{/* TABLA */}

<div className="bg-white rounded-xl shadow p-8 mt-10">

<h2 className="text-3xl font-bold text-slate-900">

Últimos indicadores

</h2>



<table className="w-full mt-8">

<thead>

<tr className="text-slate-800">

<th>Módulo</th>

<th>Meta</th>

<th>Avance</th>

</tr>

</thead>



<tbody>

{

info.tabla.map(

(item,index)=>(

<tr
key={index}
className="text-slate-700"
>

<td>{item[0]}</td>

<td>{item[1]}</td>

<td>{item[2]}</td>

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



function Menu({titulo,click}:any){

return(

<button

onClick={click}

className="
p-4
rounded-lg
text-left
hover:bg-blue-700
"

>

{titulo}

</button>

)

}



function Card({titulo,valor}:any){

return(

<div className="bg-white rounded-xl shadow p-6">

<p className="text-slate-500">

{titulo}

</p>

<h2 className="text-5xl font-bold text-slate-900">

{valor}

</h2>

</div>

)

}