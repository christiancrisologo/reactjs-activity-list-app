import { PropTypes, Component } from 'react';
import { hashHistory } from 'react-router';
import { AutoComplete } from './Autocomplete';


export const AddActivity = (props) => {
    const { name, date, time, progress, notes } = props;

    const refs = { name: "", date: "", time: "", progress: "", notes: "" };

    const submit = (e) => {
        e.preventDefault();
        props.onNewActivity({
            name: refs.name.value,
            date: refs.date.value,
            time: refs.time.value,
            progress: refs.progress.value,
            nanotesme: refs.notes.value,
        });

        for (var i in refs) {
            if (refs[i] && refs[i].value) {
                refs[i].value = ""
            }
        }
        // console.log('=>', refs);

        hashHistory.push('/list');

    }

    return (
        <form onSubmit={submit} >

            <div className="form-group">
                <label htmlFor="activity">Activity</label>
                <AutoComplete options={defaultActivityList} 
                    required defaultValue={name} ref={input => refs.name = input} />

                        {/*<input id="activity" type="text" className="form-control"
                    required defaultValue={name} ref={input => refs.name = input} />*/}
            </div>
            <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" className="form-control"
                        required defaultValue={date} ref={input => refs.date = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input id="time" type="time" className="form-control"
                        required defaultValue={time} ref={input => refs.time = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="progress">Progress</label>
                    <input id="progress" type="number" className="form-control"
                        required defaultValue={progress} ref={input => refs.progress = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea id="notes" className="form-control"
                        defaultValue={notes} ref={textarea => refs.notes = textarea} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary form-control" type="submit" />
                </div>


        </form>
            )
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

const defaultActivityList = [
    "Work",
    "Sleep",
    "Eat",
    "Jogging",
    "Nothing"
];
