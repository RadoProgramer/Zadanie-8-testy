import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				{" "}
				{}
				<PersistGate loading={null} persistor={persistor}>
					{" "}
					{}
					<App />
				</PersistGate>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);
