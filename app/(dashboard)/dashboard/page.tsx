"use client"
import {DashboardLayout} from "@/modules/Dashboard";
import {Box, Button, Chip, CssBaseline, Rating, Slider, Typography} from "@mui/material";
import React, {useState} from "react";


export default function Home() {
	const [value, setValue] = useState<number | null>(2);

	return (
		<DashboardLayout>
			<div className="">
				<Box sx={{ '& > legend': { mt: 2 } }}>
					<Typography component="legend">Controlled</Typography>
					<Rating
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
					<Typography component="legend">Uncontrolled</Typography>
					<Rating
						name="simple-uncontrolled"
						onChange={(event, newValue) => {
							console.log(newValue);
						}}
						defaultValue={2}
					/>
					<Typography component="legend">Read only</Typography>
					<Rating name="read-only" value={value} readOnly />
					<Typography component="legend">Disabled</Typography>
					<Rating name="disabled" value={value} disabled />
					<Typography component="legend">No rating given</Typography>
					<Rating name="no-value" value={null} />
				</Box>
			</div>

		</DashboardLayout>
	);
}
