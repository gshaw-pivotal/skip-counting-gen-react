import {useState} from "react";

const Generate = () => {
    const numberOfChallenges = 10;

    const skipCountAmount = [1,2,3,5,10];

    const skipCountMinStart = 40;

    const skipCountMaxStart = 250;

    const [skipCountingChallenges, setSkipCountingChallenges] = useState([]);

    const generateStartValue = () => {
        return generateNumberInRange(skipCountMinStart, skipCountMaxStart);
    }

    const generateNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateChallenges = event => {
        let skipCountChallenges = [];

        let incrementAmount;
        let startValue;

        for (let i = 0; i < numberOfChallenges; i++) {
            startValue = generateStartValue();
            incrementAmount = skipCountAmount[generateNumberInRange(0, 4)];
            skipCountChallenges.push(
                <div>{startValue} , {startValue + incrementAmount} , {startValue + (2 * incrementAmount)} , ____ , ____ , ____ , ____</div>
            );
        }

        setSkipCountingChallenges(skipCountChallenges);
    }

    return (
        <div align="center">
            <div>
                <button onClick={generateChallenges}>Generate Skip Counting Challenges</button>
            </div>
            <div>
                {skipCountingChallenges.map((challenge, index) => (<>{challenge}</>))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Generate/>
        </div>
    );
}

export default App;