import { PropTypes, Component } from 'react';


export const CompForm = ()=>{
    
}

export class AddActivity extends Component {
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        console.log('=>', this.refs);
    }

    render() {

        const { name, date, time, progress, notes } = this.props;

        return (
            <form  >

                <div className="form-group">
                    <label htmlFor="activity">Activity</label>
                    <input id="activity" type="text" className="form-control"
                        required defaultValue={name} ref={name} />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" className="form-control"
                        required defaultValue={date}  ref={date}  />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input id="time" type="time" className="form-control" 
                        required defaultValue={time}  ref={time}  />
                </div>
                <div className="form-group">
                    <label htmlFor="progress">Progress</label>
                    <input id="progress" type="number" className="form-control" 
                        required defaultValue={progress}  ref={progress}  />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea id="notes" className="form-control" 
                        defaultValue={notes} ref={notes}  />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary form-control" type="submit" />
                </div>


            </form>
        )
    }
}


const formatDate = (date) => {
    date = date || new Date();
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var year = date.getFullYear();

    return [year, month, day].join("-");
}

const formatTime = (date) => {
    date = date || new Date();
    return (date).toTimeString().split(' ')[0];
}

AddActivity.defaultProps = {
    name: "Work",
    date: formatDate(),
    time: formatTime(),
    progress: 0,
    notes: ""
}

AddActivity.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    notes: PropTypes.string
}