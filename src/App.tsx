import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClientOptions } from "./utils/constants";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routerInfo } from "./utils/router";
function App() {
	const queryClient = new QueryClient(QueryClientOptions);
	const routerObject = createBrowserRouter(routerInfo);
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routerObject} />
		</QueryClientProvider>
	);
}

export default App;
