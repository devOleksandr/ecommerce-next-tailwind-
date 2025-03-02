import {ReactNode} from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/app/(dashboard)/theme";

export const Layout = ({children}: { children: ReactNode }) => {
	return (
		<AppRouterCacheProvider options={{enableCssLayer: true}}>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
}