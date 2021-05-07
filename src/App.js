import React, { Component } from 'react';
import States from './States';
import './App.css';

class App extends Component {
    state = {
        states: [], activeCase: '', activeCasesNew: '', recovered: '', recoveredNew: '', deaths: '', deathsNew: '',
        previousDayTests: '', totalCases: ''
    };

    constructor() {
        super();
        fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
            .then((response) => response.json())
            .then((dt) => {
                const data = dt.regionData;
                let st = [];

                data.forEach(element => {
                    st.push(element);
                });
                this.setState({
                    states: st, activeCase: dt.activeCases, activeCasesNew: dt.activeCasesNew,
                    recovered: dt.recovered, recoveredNew: dt.recoveredNew, deaths: dt.deaths,
                    deathsNew: dt.deathsNew, previousDayTests: dt.previousDayTests, totalCases: dt.totalCases
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        const dt = this.state.states;
        return (
            <div className="container">
                <h1>Covid-19 Tracker (India)</h1>
                <div id="main">
                    <div className="content">
                        <b>Active Case: </b> { this.state.activeCase }<br />
                        <b>New Active Case: </b> { this.state.activeCasesNew }<br />
                        <b>Recovered: </b> { this.state.recovered }<br />
                        <b>New Recovered: </b> { this.state.recoveredNew }<br />
                    </div>
                    <div className="content">
                        <b>Deaths: </b> { this.state.deaths }<br />
                        <b>New Deaths: </b> { this.state.deathsNew }<br />
                        <b>Previous Days Tests: </b> { this.state.previousDayTests }<br />
                        <b>Total Cases: </b> { this.state.totalCases }<br />
                    </div>
                </div>
                <table id="tb">
                    <thead>
                        <tr>
                            <th>States</th>
                            <th>Total Infected</th>
                            <th>Active Case</th>
                            <th>New Infected/ Change since yesterday</th>
                            <th>Recovered</th>
                            <th>New Recovered</th>
                            <th>Deceased</th>
                            <th>New Deceased/Change since yesterday</th>

                        </tr>
                    </thead>
                    { dt.map((rcd) => {
                        return (
                            <States
                                key={ rcd.region }
                                state={ rcd.region }
                                stActiveCases={ rcd.activeCases }
                                stNewInfected={ rcd.newInfected }
                                stRecovered={ rcd.recovered }
                                stNewRecovered={ rcd.newRecovered }
                                stDeceased={ rcd.deceased }
                                stNewDeceased={ rcd.newDeceased }
                                stTotalInfected={ rcd.totalInfected }
                                total={ rcd }
                            />

                        )
                    }) }
                </table>
            </div>
        );
    }
}

export default App;