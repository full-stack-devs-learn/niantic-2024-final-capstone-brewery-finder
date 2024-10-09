import { useState } from 'react';

interface Review {
    reviewId: number;
    rating: number;
    customerReview: string;
    breweryName: string;
    reviewDate: string;
}

interface ProfileData {
    userId: number;
    username: string;
    userRole: string;
    favoriteBreweries: string;
    reviews: Review[];
}

interface EditProfileProps {
    initialProfileData: ProfileData;
    onSave: (updatedData: ProfileData) => void; 
}

const EditProfile: React.FC<EditProfileProps> = ({ initialProfileData, onSave }) => {
    const [username, setUsername] = useState(initialProfileData.username);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const updatedProfileData: ProfileData = {
            ...initialProfileData,
            username
        };

        onSave(updatedProfileData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditProfile;

