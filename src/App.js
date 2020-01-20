import React, {Component} from 'react';
import './App.css';
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";

class App extends Component {

    render() {
        return (
            <div className='App' >
                <main>
                    <Title content={'Some Like Counter'} />
                    <LikeCounter />
                    <AwesomeAnimals/>
                </main>
            </div>
        );
    }
}

export default App;
