/**
 * Created by jesus on 26.08.2017.
 */
import '../stylesheets/ui.scss'
import MdDateRange from 'react-icons/lib/md/date-range'
import { SkiDayRow } from './SkiDayRow'
import { NavLink } from 'react-router-dom'

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter ||
        !filter.match(/powder|backcountry/))?
        days:
        days.filter(day => day[filter])

    return (<div className="ski-day-list">
        <table>
            <thead>
            <tr>
                <th>Date<MdDateRange/></th>
                <th>Пункт</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <NavLink to="/list-days">
                        All Days
                    </NavLink>
                    <NavLink to="/list-days/powder">
                        Powder Days
                    </NavLink>
                    <NavLink to="/list-days/backcountry">
                        Backcountry Days
                    </NavLink>
                </td>
            </tr>
            </thead>
            <tbody>
            {filteredDays.map((day, i) => <SkiDayRow key={i} {...day}/>)}
            </tbody>
        </table>
    </div>)
}

SkiDayList.propTypes = {
    days: function (props) {
        if (!Array.isArray(props.days)) {
            return new Error("Should be array")
        } else if (!props.days.length) {
            return new Error("Must have at least 1 record")
        } else {
            return null
        }
    }
}
