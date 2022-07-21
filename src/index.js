// import _ from 'lodash';
import './style.css';
import { postItem, refresh, reload } from './api.js';

const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('refresh');

/// / call reload for the first time
reload();

/// // Submit button
submitBtn.addEventListener('click', postItem);

/// /// Refresh button
refreshBtn.addEventListener('click', refresh);