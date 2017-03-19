if (module.hot) {
  module.hot.accept();
}

import Button from './_button';
import Image from './images';
import Styles from './styles';
import Fonts from '../fonts/gotham/gotham-bold-eot.eot';
import JSON from '../data/data.json';

import '../sass/app.scss';

var app = document.getElementById('app');

app.innerHTML = Image;
app.innerHTML += Button.button;
Button.attachEl();
