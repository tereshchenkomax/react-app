/**
 * Created by jesus on 26.08.2017.
 */
import { Component } from 'react';
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            allSkiDays: [
                {
                    resort: "Машевка",
                    date: new Date("1/2/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Решетиловка",
                    date: new Date("12/2/2017"),
                    powder: true,
                    backcountry: true
                },
                {
                    resort: "Тарасовка",
                    date: new Date("3/2/2017"),
                    powder: false,
                    backcountry: false
                }

            ]
        }
    }
    countDays(filter) {
        const { allSkiDays } = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    }
    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()} powder={this.countDays("powder")} backcountry={this.countDays("backcountry")}/>
            </div>
        );
    }
}

export default App;
