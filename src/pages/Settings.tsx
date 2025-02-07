import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Switch } from '@/components/ui/switch';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'dirolabs@gmail.com',
    dateOfBirth: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    postalCode: '45962',
    city: 'San Jose',
    country: 'USA',
  });

  const [preferences, setPreferences] = useState({
    currency: 'USD',
    timezone: '(GMT-12:00) International Date Line West',
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    currentPassword: '',
    newPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Layout title="Setting">
      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              <button
                className={`pb-4 ${activeTab === 'profile' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('profile')}
              >
                Edit Profile
              </button>
              <button
                className={`pb-4 ${activeTab === 'preferences' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </button>
              <button
                className={`pb-4 ${activeTab === 'security' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </nav>
          </div>

          {activeTab === 'profile' && (
            <form onSubmit={handleSubmit}>
              {/* <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button
                    className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div> */}

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Present Address</label>
                  <input
                    type="text"
                    name="presentAddress"
                    value={formData.presentAddress}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Permanent Address</label>
                  <input
                    type="text"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-16 py-2 bg-[#1814F3] text-white rounded-lg hover:bg-[#1814F3]/90 text-base"
                >
                  Save
                </button>
              </div>
            </form>
          )}

          {activeTab === 'preferences' && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <input
                      type="text"
                      value={preferences.currency}
                      className="w-full p-2 border rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                    <input
                      type="text"
                      value={preferences.timezone}
                      className="w-full p-2 border rounded-lg bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Notification</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Switch 
                        checked={preferences.digitalCurrency}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, digitalCurrency: checked }))
                        }
                        className="bg-gray-200 data-[state=checked]:bg-emerald-500"
                      />
                      <span className="text-sm text-gray-700">I send or receive digita currency</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Switch 
                        checked={preferences.merchantOrder}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, merchantOrder: checked }))
                        }
                        className="bg-gray-200 data-[state=checked]:bg-emerald-500"
                      />
                      <span className="text-sm text-gray-700">I receive merchant order</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Switch 
                        checked={preferences.recommendations}
                        onCheckedChange={(checked) => 
                          setPreferences(prev => ({ ...prev, recommendations: checked }))
                        }
                        className="bg-gray-200 data-[state=checked]:bg-emerald-500"
                      />
                      <span className="text-sm text-gray-700">There are recommendation for my account</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-16 py-2 bg-[#1814F3] text-white rounded-lg hover:bg-[#1814F3]/90 text-base"
                >
                  Save
                </button>
              </div>
            </form>
          )}

          {activeTab === 'security' && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Two-factor Authentication</h3>
                  <div className="flex items-center gap-4">
                    <Switch 
                      checked={security.twoFactor}
                      onCheckedChange={(checked) => 
                        setSecurity(prev => ({ ...prev, twoFactor: checked }))
                      }
                      className="bg-gray-200 data-[state=checked]:bg-emerald-500"
                    />
                    <span className="text-sm text-gray-700">Enable or disable two factor authentication</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        value={security.currentPassword}
                        onChange={(e) => setSecurity(prev => ({ ...prev, currentPassword: e.target.value }))}
                        className="w-full p-2 border rounded-lg"
                        placeholder="**********"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        value={security.newPassword}
                        onChange={(e) => setSecurity(prev => ({ ...prev, newPassword: e.target.value }))}
                        className="w-full p-2 border rounded-lg"
                        placeholder="**********"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-16 py-2 bg-[#1814F3] text-white rounded-lg hover:bg-[#1814F3]/90 text-base"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Settings; 