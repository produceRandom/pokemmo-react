import React from 'react';
import baseComponent from '@/extend/baseComponent';
import PokeItem from './components/pokeItem'
import { Icon } from 'antd-mobile'

import style from './index.module.scss'

class List extends baseComponent {
    constructor(props) {
        super(props)
        this.state = {
            pokemonList: [],
            page_current:1,
            search:''
        }
    }
    render() {
        return (
            <div>

                <header className={style.header}>


                    <div className={style['header-search']}>
                        <Icon className={style.icon} type="search" size='xs' />
                        <input type="text" placeholder="请输入精灵名字" onChange={this.setSearch} value={this.state.search}></input>

                    </div>
                    <div className={style['search-btn']} onClick={this.search}>
                        搜索
                    </div>
                </header>

                <div style={{height:'44px'}}></div>
                {
                    this.state.pokemonList.map((item,key)=>{
                        return (
                            <div key={key} onClick={() => { this.gotoDetail(item.id)}}>
                                <PokeItem  {...item} />

                            </div>
           
                        )
                        
                    })
                }
            </div>
        );
    }
    componentDidMount() {
        console.log(this)
        this.getList()
    }
    getList(){

        this.$axios.get(`/pokemon/list?page_current=${this.state.page_current}&search=${this.state.search}`).then(res => {
            if (res.status === 1) {
                this.setState({
                    pokemonList: [...this.state.pokemonList,...res.data.items]
                })
            }

        })
    }
    gotoDetail(id){
        console.log(id)
        this.props.history.push(`/pokemon/detail?id=${id}`)
    }
    onReachBottom(){
        console.log('滚动到底部');
        this.setState({
            page_current:this.state.page_current + 1
        })
        this.getList()
    }
    setSearch=(e)=>{
        this.setState({
            search:e.target.value
        })
    }
    search = ()=>{
        this.setState({
            page_current:1,
            pokemonList:[]
        })
        this.getList()
    }

}
export default List