import Tooltip from './ed-ui/tooltip';
import Dropdown from './ed-ui/dropdown';
import Tabs from './ed-ui/tabs';
import Snackbar from './ed-ui/snackbar';

// create tooltip
const element = document.querySelector('.tooltip');
const tooltip = new Tooltip(element);
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create Tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create Snackbar
const snackbar = new Snackbar();
snackbar.init();

const snackbarButton = document.querySelector('.snackbar-trigger');
snackbarButton.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});