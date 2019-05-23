import App from './App.svelte';
import 'normalize-scss/sass/normalize/_import-now.scss';
import 'typebase.css/src/typebase.sass';
import './styles/flexbox/main.scss';
import './styles/index.sass';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;