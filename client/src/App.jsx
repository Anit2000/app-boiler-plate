import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { AppProvider as PolarisProvider } from '@shopify/polaris';
import { useEffect } from 'react';
import AppBridgeProvider from './providers/AppBridgeProvider';

function App() {
  return (
    <PolarisProvider>
      <AppBridgeProvider>
        <ui-nav-menu>
          <a href="/debug/graphql">Fetch Data</a>
        </ui-nav-menu>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button >
            count is 0
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </AppBridgeProvider>
    </PolarisProvider>
  )
}

export default App
