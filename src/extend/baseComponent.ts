import  { Component } from 'react';
import axios from '../rewrite/axios';
import url from '../utils/url'
import commonTool from '../utils/common'
import {Toast} from 'antd-mobile'
/**
 * 基础组件
 */
export class BbComponents  extends Component{
    /**
     * 常用方法封装
     */
    $commonTool:Object
    /**
     * 二次封装的axios请求
     */
    $axios: any;
    /**
     * 路由对象
     */
    $url: { get(name: string): string | null; query(): any; };
    /**
     * antd-mobile的toast组件
     */
    $toast: any;
    constructor(){
        super({})
        this.$axios = axios
        this.$url = url
        this.$toast = Toast
        this.$commonTool = commonTool
        window.addEventListener('scroll',()=>{
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            //滚动条到底部的条件
            if (scrollTop + windowHeight >= scrollHeight) {
                
                this.onReachBottom && this.onReachBottom()
            }
        })
 
    }

    onReachBottom(){}


}
export default BbComponents;