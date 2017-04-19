import { Component, PropTypes } from 'react';

export class AutoComplete extends Component {
    constructor(props) {
        super(props);
    }

    get value() {
        return this.refs.inputAutoComplete.value;
    }

    set value(inputValue) {
        this.refs.inputAutoComplete.value = inputValue;
    }

    render() {
        return (
            <div>
                <input type="text"
                    ref="inputAutoComplete"
                    list="_datalist" className="form-control" />
                <datalist id="_datalist">
                    {this.props.options.map(
                        (opt, i) => {
                            return <option key={i}> {opt}</option>
                        }
                    )}
                </datalist>
            </div>)
    }
}

AutoComplete.defaultProps = {
    options: []
}