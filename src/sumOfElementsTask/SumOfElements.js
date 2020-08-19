import React from "react";
//import processData from "./dataProcessing";

//TODO разметка ввода и вывода результата

const Result = ({result}) => (
    <p>{result}</p>
);

//result - это свойство, точнее типа объект из одного поля

/*
const SumOfElements = () => (
    <div>
        <Result result="0"/>
    </div>
);*/

class SumOfElements extends React.Component {
    state = {
        inputString: "",
        outputString: "",
    }

    render() {
        this.state.outputString = this.processData("23 1 45 6 89");
        const { inputString, outputString } = this.state;

        return (
            <div>
                <Result result={ outputString }/>
            </div>
        );
    }

    processData(inputString) {
        //TODO проверить основные варианты и граничные условия
        let arr = this.parseToArray(inputString);
        let sortedArr = this.getSortedArray(arr);
        let result = sortedArr[0] + sortedArr[1];

        return result;
    }

    parseToArray(inputString) {
        //TODO реализовать конвертацию в массив
        let resultArr = [23, 1, 45, 6, 89];
        return resultArr;
    }

    getSortedArray(inputArr) {
        //TODO реализовать сортировку
        return [1, 6, 23, 45, 89];
    }
}

export default SumOfElements;