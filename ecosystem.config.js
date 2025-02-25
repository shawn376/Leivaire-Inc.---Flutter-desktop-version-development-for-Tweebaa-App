module.exports = {
  apps: [
    {
      name: 'tweebaa-generator-watch',
      script: './generator/index.js',
      autorestart: false,
      watch_delay: 1000,
      watch: ['generator'],
    },
  ],
}
