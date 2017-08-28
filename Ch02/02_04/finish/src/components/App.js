/**
 * Created by jesus on 26.08.2017.
 */
import React from 'react'
import { Component } from 'react';
import { SkiDayCount } from './SkiDayCount'
import { SkiDayList } from './SkiDayList'
import { Menu } from './Menu'
import { AddDayForm } from "./AddDayForm";

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
                <Menu />
                {
                    (this.props.location.pathname === "/") ?
                        <SkiDayCount total={this.countDays()}
                                     powder={this.countDays("powder")}
                                     backcountry={this.countDays("backcountry")}/>
                    :   (this.props.location.pathname === "/add-day") ?
                            <AddDayForm /> :
                            <SkiDayList days={this.state.allSkiDays}
                                        filter={this.props.params.filter}/>
                }

            </div>
        );
    }
}

