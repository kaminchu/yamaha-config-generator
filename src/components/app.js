// @flow
import { h, Component } from 'preact';
import { Provider } from 'mobx-preact';


import Config from "../stores/config";

const stores = {
  config: new Config()
};

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Provider {...stores}>
				</Provider>
			</div>
		);
	}
}
