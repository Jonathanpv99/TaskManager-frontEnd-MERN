import { useAuth } from "../context/authContext";
const ProfilePage = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>Profile Page</h1>
            <h2> username: { user.username }</h2>
            <h3> email: { user.email }</h3>
        </div>
    )
}

export default ProfilePage;