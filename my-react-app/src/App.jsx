import { lazy, Suspense } from 'react';
import './App.css';

// This function adds a manual delay to the loading of your component
const Dashboard = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Dashboard')), 1000); // 5000 is 5 seconds
  });
});

function App() {
  return (
    /* The fallback will now show for 5 seconds */
    <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>loading...</div>}>
      <>
        <Dashboard />
      </>
    </Suspense>
  );
}

export default App;