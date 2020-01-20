// src/components/AwesomeAnimals.js
import React from "react";

export default class AwesomeAnimals extends React.Component {
    state = {
        animalsByAwesomeness: [
            "Chicken",
            "Sloth",
            "Porcupine",
            "Killer whale",
            "Velociraptor",
            null,
            undefined,
            {
                name: "Doggy",
                hp: 100
            },
            function () {
                return 'Function() animal, this: ' + this;
            },
            () => { return '() => animal, this: ' + this.toString()}
        ]
    }

    render() {
        return (
            <ul>
                {this.state.animalsByAwesomeness.map(
                    (animal, index) => {
                        let out = '';
                        if (typeof animal === 'object' && animal !== null)
                            out = `${animal.name} (hp: ${animal.hp})`;
                        else if (typeof animal === 'string')
                            out = animal;
                        else if (typeof animal === 'function')
                            out = animal();
                        else
                            return null;

                        return <li>Level {index}: {out}</li>;
                    })
                }
            </ul>
        );
    }
}