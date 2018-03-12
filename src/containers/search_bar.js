import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import ACtion Creator - fetchWeather
import {fetchWeather} from '../actions/index';

//export default class SearchBar extends Component {
class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //onChange={ (event) => this.onInputChange(event)}
    }
    
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({term:event.target.value})
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        //fetch data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    
    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                 placeholder="Get a five-day forecast in your favorite cities"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>            
        );
    }
}

function mapDispatchToProps (dispatch) {
    //whenever selectBook is called, the action is passed to 
    // all reducers
    return bindActionCreators({fetchWeather}, dispatch);
    //calling this.props.selector will call our action creator.
}

export default connect(null, mapDispatchToProps) (SearchBar)