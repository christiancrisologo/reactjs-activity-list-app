import { Component , PropTypes} from 'react';
import '../styles/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

 
export class ActivityRow extends Component {
    // setDate(date){
    //     date = date || new Date();
    //     return date.getMonth(1) + "/" + date.getDate() + "/" + date.getFullYear()
    // }

    render() {
        return (
            <tr>
                
                <td className="name">
                    <span>{this.props.name}</span>
                    <Terrain />
                </td>
                <td className="date">
                    <span>{this.props.date}</span>
                    <Terrain />
                </td>
                <td className="time">
                    <span>{this.props.time}</span>
                    <Terrain />
                </td>
                <td className="progress">
                    <span>{this.props.progress}</span>
                    <Terrain />
                </td>
                <td className="notes">
                    <span>{this.props.notes}</span>
                    <Terrain />
                </td>
            </tr>
        )
    }
}

ActivityRow.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string,
    progress: PropTypes.number.isRequired,
    notes: PropTypes.string
}


