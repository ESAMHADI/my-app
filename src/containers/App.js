import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';






// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>        انظر للاسفل بانغيره  ونعدل عليه(stat)اشتغلنا على هذا الكود قبل والان بعدما سوينا(
//         </div>


//     );
// }
// export default App;

class App extends Component {
    constructor() {
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        // this.setState({ robots: robots})  "i will change this line whith the next three lines It leads to the same result.
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots:users  }));
        // //.then(users => this.setState({  })); if i use this " None is Here" will appear 
        //the last fetch code if i use it some things will change so i will use the first line used it befor
        this.setState({ robots: robots })


    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // const filteredRobots =  this.state.robots.filter(robots =>{
        //     return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase)
        // })

    }

    render() {
        // const { robots, searchfield } = this.state; if we want to use this line we can remove "this.state" from all other places 
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        //in the next line i will add some thing cool that is when we recieve an empty object some thing should happen ,,take a look
        if (this.state.robots.length === 0) {
            return <h1>None Is Here</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>BestFamily</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <CardList robots={robots}/> we used it befor using state  ,whit state we can use it by anothe way as will showing in the next line       */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />

                        </ErrorBoundry>


                    </Scroll>

                </div>
            );
        }


    }

}

export default App;
