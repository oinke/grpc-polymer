module.exports = {
    apps: [{
      name: 'grpc-polymer',
      script: 'npm',
      args: 'start',
      watch: true,
      exec_mode: 'cluster',
      instances: 2,
    }],
  };
  