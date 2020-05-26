import React from 'react';
import  LazyLoad from 'react-lazyload'

import style from '../index.module.scss'


function getCode(number) {
    if (number >= 100) {
        return number
    }
    if (number < 10) {
        return '00' + number
    }
    if (number >= 10 && number < 100) {
        return '0' + number
    }
    return number
}
export function PokeItem(props){
    return (
        <div className={style['card-container']}>
            <div className={style["card-img-wrapper"]}>
                <LazyLoad>
                    <img alt='精灵图' src={`http://res.pokemon.name/common/pokemon/pgl/${getCode(props.id)}.00.png`}></img>
                </LazyLoad>
            </div>
            <div>
                <div className={style["card-cell"]}>

                    <div className={style["title"]}>
                        编号
                </div>
                    <div className={style["desc"]}>#{ getCode(props.id) }</div>
                </div>
                <div className={style["card-cell"]}>

                    <div className={style["title"]}>
                        精灵
                </div>
                    <div className={style["desc"]}>{ props.name }</div>
                </div>
                <div className={style["card-cell"]}>

                    <div className={style["title"]}>
                        英文名
                </div>
                    <div className={style["desc"]}>{props.name_cn }</div>
                </div>

            </div>
        </div>
    )
}
export default PokeItem
