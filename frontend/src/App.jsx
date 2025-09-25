import React, { useState, useEffect } from 'react';
import Manifest from '@mnfst/sdk';
import LandingPage from './screens/LandingPage';
import DashboardPage from './screens/DashboardPage';
import config from './constants';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [pearVarieties, setPearVarieties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState('landing');

  const manifest = new Manifest(config.APP_ID);

  useEffect(() => {
    // Check for an existing session
    manifest.from('users').me()
      .then(userData => {
        if (userData) {
          setUser(userData);
          setScreen('dashboard');
        }
      })
      .catch(() => {
        setUser(null);
        setScreen('landing');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const login = async (email, password) => {
    try {
      await manifest.login('users', email, password);
      const userData = await manifest.from('users').me();
      setUser(userData);
      setScreen('dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const logout = async () => {
    await manifest.logout();
    setUser(null);
    setPearVarieties([]);
    setScreen('landing');
  };

  const loadPears = async () => {
    if (!user) return;
    try {
      const response = await manifest.from('pear_varieties').find({
        include: ['owner'],
        sort: { createdAt: 'desc' }
      });
      setPearVarieties(response.data);
    } catch (error) {
      console.error('Failed to load pear varieties:', error);
    }
  };

  const createPear = async (pearData) => {
    try {
      const newPear = await manifest.from('pear_varieties').create(pearData);
      setPearVarieties([newPear, ...pearVarieties]);
    } catch (error) {
      console.error('Failed to create pear variety:', error);
      alert('Error: Could not create pear variety. Please check the form data.');
    }
  };

  const deletePear = async (pearId) => {
    try {
      await manifest.from('pear_varieties').delete(pearId);
      setPearVarieties(pearVarieties.filter(p => p.id !== pearId));
    } catch (error) {
      console.error('Failed to delete pear variety:', error);
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading Pearadise...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {screen === 'landing' ? (
        <LandingPage onLogin={() => login('user@example.com', 'password')} />
      ) : (
        <DashboardPage
          user={user}
          pears={pearVarieties}
          onLogout={logout}
          onLoadPears={loadPears}
          onCreatePear={createPear}
          onDeletePear={deletePear}
        />
      )}
    </div>
  );
}

export default App;
