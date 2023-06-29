import { useNavigate } from "react-router-dom";

interface AuthorizationProps {
	children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
	// const isLogged = Boolean(localStorage.getItem(ACCESS_TOKEN));
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!isLogged) {
	// 		navigate("/signin");
	// 	}
	// }, [isLogged, updateHook, navigate]);

	return <>{children}</>;
};

export default Authorization;
