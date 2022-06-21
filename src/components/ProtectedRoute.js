import { Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({children}) => {
    const {currentUser} = useAuth();
    console.log(currentUser);

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;