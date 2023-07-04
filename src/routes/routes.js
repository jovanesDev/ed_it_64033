import Carrito from "../views/Carrito";
import Catalogo from "../views/Catalogo";
import Contacto from "../views/Contacto";
import Error404 from "../views/Error404";
import {Navigate} from 'react-router-dom'
import Home from "../views/Home";
import CatalogoItem from "../views/CatalogoItem";
import Ropa from "../views/Ropa/Ropa";

export const routes = [
    {
        path:'/',
        Element:Home
    },
    {
        path:'/catalogo',
        Element:Catalogo
    },
    {
        path:'/catalogo/:id',
        Element:CatalogoItem
    },
    {
        path:'/carrito',
        Element:Carrito
    },
    {
        path:'/contacto',
        Element:Contacto
    },
    // {
    //     path:'/ropa',
    //     Element:Ropa
    // },
    // {
    //     path:'*',
    //     Element:Navigate
    // }
]

