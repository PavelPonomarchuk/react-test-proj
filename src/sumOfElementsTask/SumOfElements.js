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
        this.state.outputString = this.processData(this.state.inputString);
        const { inputString, outputString } = this.state;

        //TODO форму ещё наверное переделать и привязать к состоянию
        return (
            <div>
                <p>Введите целые числа через пробел:</p>
                <form>
                    <input type="text" value={ this.state.inputString } />
                    <input type="button" value="Отправить"/>
                </form>
                <p>Результат (сумма двух минимальных элементов из введенных):</p>
                <Result result={ outputString }/>
            </div>
        );
    }

    processData(inputString) {
        //TODO проверить основные варианты и граничные условия
        let arr = this.parseToArray(inputString);
        let minElementsArr = this.getTwoMinElements(arr);
        let result = minElementsArr[0] + minElementsArr[1];

        return result;
    }

    parseToArray(inputString) {
        //TODO самому хоть еще проверить эту реализацию
        let resultArr = inputString.split(' ');
        for (let i = 0; i < resultArr.length; i++) {
            resultArr[i] = Number(resultArr[i]);
        }
        return resultArr;
    }

    getTwoMinElements(inputArr) {
        let copyArr = inputArr.slice();
        let currentNumber;
        let result = [];

        for (let j = 0; j < 2; j++) {
            for (let i = inputArr.length - 1; i > 0; i--) {
                if (copyArr[i] < copyArr[i - 1]) {
                    currentNumber = copyArr[i - 1];
                    copyArr[i - 1] = copyArr[i];
                    copyArr[i] = currentNumber;
                }
            }
        }
        result.push(copyArr[0]);
        result.push(copyArr[1]);
        return result;
    }
}

export default SumOfElements;