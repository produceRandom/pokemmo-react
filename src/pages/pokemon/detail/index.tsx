import React from 'react';
import baseComponent from '../../../extend/baseComponent';

export class detail extends baseComponent {
    state = {
        /**
         * 详情
         */
        pokemonDetail: {
            name_cn:''
        }
    }
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                名字：{this.state.pokemonDetail.name_cn}
            </div>
        );
    }
    componentDidMount() {

        console.log(this)
        let id = this.$url.query().id
        this.$axios.get(`/pokemon/detail?id=${id}`).then((res:any) => {
 
            if(res.status === 1){
                this.setState({
                    pokemonDetail:res.data
                })
            }
            
        })
    }

    

}

export default detail;
