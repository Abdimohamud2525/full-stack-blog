import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// our hook

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
	return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const value = {
		currentUser,
		setCurrentUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};