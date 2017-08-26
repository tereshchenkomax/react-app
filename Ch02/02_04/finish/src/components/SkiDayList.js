/**
 * Created by jesus on 26.08.2017.
 */
import '../stylesheets/ui.scss'
import MdDateRange from 'react-icons/lib/md/date-range'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) =>(
    <table>
        <thead>
        <tr>
            <th>Date<MdDateRange /></th>
            <th>Пункт</th>
            <th>Powder</th>
            <th>Backcountry</th>
        </tr>
        </thead>
        <tbody>
            {days.map((day, i) => <SkiDayRow key={i} {...day}/>)}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: function (props) {
        if(!Array.isArray(props.days)){
            return new Error("Should be array")
        } else if (!props.days.length){
            return new Error("Must have at least 1 record")
        } else {
            return null
        }
    }
}
