import axios from 'axios';

export default function fetchData() {

	const API_KEY = 'nxKl8yTvpvsXEqRz06mTPnn29uyckFmFCYrnqEIz' // API KEY
	const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=' // API ENDPOINT
	const request = axios.get(END_POINT+API_KEY);  // GET REQUEST

	return { // return plain object with props
		type: 'FETCH_DATA', // Action Type
		payload: request // Action Payload (cargo)
	};

}