import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { lingui } from '@lingui/vite-plugin'
import babel from 'vite-plugin-babel'

export default defineConfig({
  plugins: [
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        parserOpts: {
          plugins: ['jsx'],
        },
        plugins: ['@lingui/babel-plugin-lingui-macro'],
      },
    }),
    react(),
    lingui(),
  ],
  server: {
    port: 3080,
  },
})
