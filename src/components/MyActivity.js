import '../styles/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import { ActivityList } from './ActivityList';
import { Total } from './Total';
 
export const MyActivity = (props)=>{
        console.log("filter : ",props.filter);
        return (
            <div  >
                <ActivityList activities={props.activities} 
                    filter={props.filter} />
                <Total total={props.total} />
            </div>
        )
}


MyActivity.defaultProps = {
    activities: []
    // activities: [
    //     {
    //         name: 'sleep',
    //         date: new Date('1/2/2017'),
    //         time: '7:00am',
    //         progress: 10,
    //         notes: '',
    //         key: 0

    //     },
    //     {
    //         name: 'eat',
    //         date: new Date('2/2/2017'),
    //         time: '7:00am',
    //         progress: 10,
    //         notes: '',
    //         key: 1


    //     },
    //     {
    //         name: 'study',
    //         date: new Date('3/2/2017'),
    //         time: '7:00am',
    //         progress: 10,
    //         notes: '',
    //         key: 2

    //     }
    // ]

}
