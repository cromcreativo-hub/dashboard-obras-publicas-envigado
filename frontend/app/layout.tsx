import "./globals.css";

export const metadata = {
title:"Dashboard Obras Públicas",
description:"Envigado"
};

export default function RootLayout({
children,
}:{
children:React.ReactNode
}) {

return (

<html lang="es">

<body>

{children}

</body>

</html>

);

}