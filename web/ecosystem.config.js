module.exports = {
    apps: [
        {
            name: 'server',
            script: './server.js',
            watch: ['server.js'],
            // Delay between restart
            watch_delay: 2000,
            ignore_watch: ['node_modules', 'public', 'updateCookies.js'],
            watch_options: {
                followSymlinks: false,
            },
        },
    ],
};
