import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
  targets: [
    {
      format: 'amd',
      moduleId: 'naive-router',
      dest: 'dist/amd/naive-router.js'
    },
    {
      format: 'es',
      dest: 'dist/es/naive-router.js'
    },
    {
      format: 'cjs',
      dest: 'dist/cjs/naive-router.js'
    },
    {
      format: 'iife',
      moduleName: 'NaiveRouter',
      dest: 'dist/iife/naive-router.js'
    }
  ]
};
