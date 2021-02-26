import React,{Component} from 'react'


export default class Default extends Component {
    render() {
        return (
            <div>
                <h3>我是default组件</h3>
            </div>
        )
    }

    componentDidMount() {
        // React.axios('/api/home').then(res=>console.log(res))
        // this.axios({url:'/api/home'}).then(res=>console.log(res))
    }
}