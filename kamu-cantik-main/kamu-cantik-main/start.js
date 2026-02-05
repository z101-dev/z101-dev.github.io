const { spawn } = require('child_process');
const path = require('path');

const server = spawn('node', ['server.js'], { stdio: 'inherit' });

setTimeout(() => {
    const electronPath = path.join(
        __dirname,
        'node_modules',
        '.bin',
        process.platform === 'win32' ? 'electron.cmd' : 'electron'
    );

    const electron = spawn(`"${electronPath}"`, ['.'], {
        stdio: 'inherit',
        shell: true
    });
}, 100);