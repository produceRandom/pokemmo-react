
import React from 'react';
import Loadable from 'react-loadable'
import list from '@/pages/pokemon/list'
const routes = [

    {
        path: "/pokemon/list",
        component: list

    },   
    {
        path: "/pokemon/detail",
        component: Loadable({
            loader: () => import("@/pages/pokemon/detail"),
            loading: () => <div />
        })
    },    
    {
        path:'*',
        component:()=>{return <div>404</div>}
    }
   
    // {
    //     path: "/list/:id",
    //     component: ()=>{require()}
    // }    
    // {
    //     path: "/tacos",
    //     component: Tacos,
    //     routes: [
    //         {
    //             path: "/tacos/bus",
    //             component: Bus
    //         },
    //         {
    //             path: "/tacos/cart",
    //             component: Cart
    //         }
    //     ]
    // }
]
export default routes