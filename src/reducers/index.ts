import {combineReducers} from 'redux';
import weather from './weather';
import city from './city';

export default combineReducers({weather , city});