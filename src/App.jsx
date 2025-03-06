import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FileSystem } from './FileSystem';

const dir = [
  {
    name: 'src',
    children: [
      {
        name: 'app',
        children: [
          {
            name: 'app.jsx',
          },
        ],
      },
      {
        name: 'index.jsx',
      },
      {
        name: 'style.css',
      },
    ],
  },
];


function App() {

  return (
    <div className='App'>
    <FileSystem files={dir} />
  </div>
  )
}

export default App
