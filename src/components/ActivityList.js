import { PropTypes } from 'react';
import { Link } from 'react-router';
import { ActivityRow } from './ActivityRow';
import '../styles/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';


export const ActivityList = (props) => (
    
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Activty</th>
                <th>Date</th>
                <th>Time</th>
                <th>Progress</th>
                <th>Notes</th>
            </tr>
            <tr>
                <td >
                    Quick Links: <Link to="/list/sleep"   >  Sleep </Link>

                </td>
            </tr>
        </thead>
        <tbody>
            {
                props.activities.
                    filter(item => {
                        
                        if(item.name===props.filter){
                            return item;
                        }else if(!props.filter){
                            return item;
                        }                    

                    }).map((item, i) => {
                        return <ActivityRow name={item.name}
                            date={item.date}
                            time={item.time}
                            progress={item.progress}
                            notes={item.notes}
                            key={i} />;
                    })
            }
        </tbody>
    </table>
);




ActivityList.defaultProps = {
    activities: [],
    filter: ''
}

ActivityList.propTypes = {
    activities: function (props) {
        if (!Array.isArray(props.activities)) {
            return new Error("Should be an array");
        } else if (!props.activities.length) {
            return new Error("Should at least one record");
        } else {
            return null
        }
    }
}


