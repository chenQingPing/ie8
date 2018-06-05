import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
    render() {
        return <div>cqp测试</div>;
    }
}

const DOM = document.getElementById("app");

const renderDOM = () => {
    render(<App />, DOM);
};
if(module.hot){
    module.hot.accept([], () => {
        renderDOM()
    });
}
renderDOM();