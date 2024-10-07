import { Suspense } from "react";
import Navigation from "./Navigation";

export function SharedLayout({ children }) {
	return (
		<div>
            <Navigation />
			<Suspense fallback={<p>loading...</p>}>{children}</Suspense>
		</div>
	);
}
export default SharedLayout;
