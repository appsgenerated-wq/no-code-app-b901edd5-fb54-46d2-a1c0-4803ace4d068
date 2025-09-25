import React, { useEffect, useState } from 'react';
import { ArrowRightOnRectangleIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline';

const DashboardPage = ({ user, pears, onLogout, onLoadPears, onCreatePear, onDeletePear }) => {
  const [newPear, setNewPear] = useState({ name: '', description: '', origin: '', ripeness: 'Peak Ripeness', photo: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    onLoadPears();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
        setNewPear({ ...newPear, photo: e.target.files[0] });
    }
  };

  const handleCreatePear = async (e) => {
    e.preventDefault();
    if (!newPear.name) {
      alert('Pear name is required.');
      return;
    }
    setIsSubmitting(true);
    await onCreatePear(newPear);
    setNewPear({ name: '', description: '', origin: '', ripeness: 'Peak Ripeness', photo: null });
    e.target.reset(); // Reset file input
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl">🍐</span>
              <span className="ml-2 text-xl font-bold text-gray-900">Pearadise</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user?.name}!</span>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-500" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Create New Pear Form */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
              <PlusCircleIcon className="h-6 w-6 mr-2 text-green-600" />
              Add a New Pear Variety
            </h2>
            <form onSubmit={handleCreatePear} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text" id="name" placeholder="e.g., Bartlett"
                    value={newPear.name} onChange={(e) => setNewPear({ ...newPear, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
                  <input
                    type="text" id="origin" placeholder="e.g., England"
                    value={newPear.origin} onChange={(e) => setNewPear({ ...newPear, origin: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description" placeholder="Notes on flavor, texture, and appearance..."
                    value={newPear.description} onChange={(e) => setNewPear({ ...newPear, description: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label htmlFor="ripeness" className="block text-sm font-medium text-gray-700">Ripeness Stage</label>
                    <select id="ripeness" value={newPear.ripeness} onChange={(e) => setNewPear({ ...newPear, ripeness: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm">
                        <option>Unripe</option>
                        <option>Peak Ripeness</option>
                        <option>Overripe</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
                    <input type="file" id="photo" onChange={handleFileChange} accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" disabled={isSubmitting} className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50">
                  {isSubmitting ? 'Adding...' : 'Add Pear'}
                </button>
              </div>
            </form>
          </div>

          {/* Pears List */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Your Pear Collection</h2>
            {pears.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pear varieties added yet. Add your first one above!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pears.map(pear => (
                  <div key={pear.id} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                    <img src={pear.photo?.thumbnail?.url || 'https://placehold.co/400x300/a8e063/FFFFFF?text=Pear'} alt={pear.name} className="h-48 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{pear.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">Origin: {pear.origin || 'Unknown'}</p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{pear.description}</p>
                       <p className="text-xs text-gray-500 mt-2">Status: <span className="font-medium text-green-700">{pear.ripeness}</span></p>
                    </div>
                    <button onClick={() => onDeletePear(pear.id)} className="absolute top-2 right-2 p-1.5 bg-white/70 rounded-full text-gray-500 hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
