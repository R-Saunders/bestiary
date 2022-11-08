import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Entry from "./pages/Entry";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
	return (
      <Auth0Provider
        domain="dev-ys0se513rz3saz7h.us.auth0.com"
        clientId="pDZ8SU9D83g7xH9CEqmt9273SWHcJZAh"
        redirectUri={window.location.origin}
      >
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/entry/:id" element={<Entry />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Auth0Provider>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
