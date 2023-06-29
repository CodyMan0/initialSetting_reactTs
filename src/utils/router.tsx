import Authorization from "../components/layout/Authorization";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const routerChildrenInfo = [
	{
		index: true,
		element: <Home />,
		withAuthorization: false,
	},
	{
		path: "signin",
		element: <Auth />,
		withAuthorization: false,
	},
];

export const mappingRouterWithAuthorization = routerChildrenInfo.map(
	(route) => {
		return route.withAuthorization
			? {
					path: route.path,
					element: <Authorization>{route.element}</Authorization>,
			  }
			: {
					index: true,
					path: route.path,
					element: route.element,
			  };
	}
);

export const routerInfo = [
	{
		path: "/",
		errorElement: <NotFound />,
		children: mappingRouterWithAuthorization,
	},
];
