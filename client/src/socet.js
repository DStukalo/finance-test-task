import { io } from 'socket.io-client';

const URL = 'https://finance-back-end.onrender.com/';

export const socket = io(URL);
