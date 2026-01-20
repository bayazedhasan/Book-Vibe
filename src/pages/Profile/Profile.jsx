import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import { storage } from '../../components/Firebase/Firebase';
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile = () => {
    const { user, updateUserProfile, updateUserEmail, updateUserPassword } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);

    // Security State
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // CORS Modal
    const [showCorsModal, setShowCorsModal] = useState(false);
    const CORS_COMMAND = `gsutil cors set cors.json gs://books-vibe.firebasestorage.app`;
    const JSON_CONTENT = `[
  {
    "origin": ["*"],
    "method": ["GET", "PUT", "POST", "DELETE", "HEAD", "OPTIONS"],
    "responseHeader": ["Content-Type", "Authorization", "Content-Length", "User-Agent", "x-goog-resumable"],
    "maxAgeSeconds": 3600
  }
]`;

    // Feedback
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhoto(user.photoURL || '');
            setNewEmail(user.email || '');
        }
    }, [user]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        setError('');

        // MOCK UPLOAD
        setTimeout(() => {
            const mockUrl = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
            setPhoto(mockUrl);
            setSuccess("Mock Image uploaded! Click 'Save Changes' to apply.");
            setLoading(false);
        }, 1000);
    };

    const handleGeneralUpdate = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        updateUserProfile(name, photo)
            .then(() => {
                setSuccess('Profile updated successfully!');
                window.location.reload();
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSecurityUpdate = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const promises = [];

        if (newEmail !== user.email) {
            promises.push(updateUserEmail(newEmail));
        }
        if (newPassword) {
            promises.push(updateUserPassword(newPassword));
        }

        Promise.all(promises)
            .then(() => {
                setSuccess('Security settings updated! You may need to login again.');
                setNewPassword('');
            })
            .catch(err => {
                setError("Update failed: " + err.message + " (Try logging in again first)");
            })
            .finally(() => setLoading(false));
    }

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Sidebar / Tabs */}
                <div className="md:w-1/4 bg-primary/5 p-6 border-b md:border-b-0 md:border-r border-base-200">
                    <div className="text-center mb-8">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photo || user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" />
                            </div>
                        </div>
                        <h3 className="font-bold mt-2 text-primary">{name || 'User'}</h3>
                    </div>

                    <ul className="menu bg-base-100 rounded-box w-full gap-2">
                        <li>
                            <button
                                onClick={() => setActiveTab('general')}
                                className={activeTab === 'general' ? 'active font-bold' : ''}
                            >
                                General Info
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={activeTab === 'security' ? 'active font-bold' : ''}
                            >
                                Security
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="md:w-3/4 p-8 lg:p-12">
                    {success && <div className="alert alert-success mb-6 text-white">{success}</div>}
                    {error && (
                        <div className="alert alert-error mb-6 text-white flex flex-col items-start gap-2">
                            <span>{error}</span>
                            {showCorsModal && (
                                <button
                                    onClick={() => document.getElementById('cors_modal').showModal()}
                                    className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-red-500"
                                >
                                    Fix CORS Issue
                                </button>
                            )}
                        </div>
                    )}

                    {/* CORS Troubleshooting Modal */}
                    <dialog id="cors_modal" className="modal">
                        <div className="modal-box w-11/12 max-w-3xl">
                            <h3 className="font-bold text-lg text-error">Fixing Image Upload (CORS Error)</h3>
                            <p className="py-4">
                                This error happens because Google's servers block the upload from "localhost" by default.
                                You must run the following commands in the <strong>Google Cloud Console</strong> to allow it.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-base-300 p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Step 1: Open Terminal</h4>
                                    <p>Go to <a href="https://console.cloud.google.com/" target="_blank" className="link link-primary">Google Cloud Console</a> and click the <strong>Terminal Icon</strong> (top-right).</p>
                                </div>

                                <div className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                                    <h4 className="font-bold mb-2">Step 2: Create Config File</h4>
                                    <pre className="text-xs bg-black text-green-400 p-2 rounded">
                                        {`cat > cors.json <<EOF
${JSON_CONTENT}
EOF`}
                                    </pre>
                                </div>

                                <div className="bg-base-300 p-4 rounded-lg overflow-x-auto">
                                    <h4 className="font-bold mb-2">Step 3: Apply Config</h4>
                                    <pre className="text-xs bg-black text-green-400 p-2 rounded">
                                        {CORS_COMMAND}
                                    </pre>
                                </div>
                            </div>

                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    {activeTab === 'general' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">General Information</h2>
                            <form onSubmit={handleGeneralUpdate} className="space-y-6">
                                <div className="flex flex-col gap-4 items-center sm:flex-row sm:items-end">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold">Profile Picture</span>
                                        </label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="file-input file-input-bordered file-input-primary w-full"
                                            accept="image/*"
                                        />
                                        <label className="label">
                                            <span className="label-text-alt">Upload from your computer</span>
                                        </label>
                                    </div>

                                    <div className="divider lg:divider-horizontal">OR</div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-semibold">Photo URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={photo}
                                            onChange={(e) => setPhoto(e.target.value)}
                                            placeholder="https://example.com/my-photo.jpg"
                                            className="input input-bordered w-full focus:border-primary focus:ring-primary"
                                        />
                                        <label className="label">
                                            <span className="label-text-alt">Paste a direct image link</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Display Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-primary"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Phone Number</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 234 567 8900"
                                        className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-primary"
                                    />
                                    <label className="label">
                                        <span className="label-text-alt text-warning">Note: Custom phone linking is coming soon.</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary text-white rounded-xl shadow-lg mt-4" disabled={loading}>
                                    {loading ? <span className="loading loading-spinner"></span> : 'Save Changes'}
                                </button>
                            </form>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
                            <p className="text-sm text-gray-500 mb-6">Update your email and password. Sensitive actions require a recent login.</p>

                            <form onSubmit={handleSecurityUpdate} className="space-y-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email Address</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-primary"
                                    />
                                </div>

                                <div className="divider"></div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">New Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Leave blank to keep current password"
                                        className="input input-bordered w-full rounded-xl focus:border-primary focus:ring-primary"
                                    />
                                </div>

                                <button type="submit" className="btn btn-error text-white rounded-xl shadow-lg mt-4" disabled={loading}>
                                    {loading ? <span className="loading loading-spinner"></span> : 'Update Credentials'}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
