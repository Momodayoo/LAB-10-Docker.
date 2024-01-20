const express = require('express');
const app = express();

app.use (express.static(__dirname +));

app.listen(proces.env.PORT || 8080);

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
    })
