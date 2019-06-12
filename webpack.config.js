resolve: {
  extensions: ['*', '.js', '.ts'],
  modules: [
    rootDir,
    path.join(rootDir, 'node_modules')
  ],
  alias: {
    '@shared': 'src/app/modules/shared',
    '@app': 'src/app'
  }
},
