export const QueryClientOptions = {
	defaultOptions: {
		queries: {
			staleTime: 10000,
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
};
