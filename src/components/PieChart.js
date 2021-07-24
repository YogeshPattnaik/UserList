import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { CircularProgress } from "@material-ui/core";

const PieChart = (props) => {
    console.log(props.userDataGraph)
	return (
		<>
            {props.userLoading && props.userDataGraph.length === 0 ? 
            <>
            <CircularProgress />
            </>
            :
            !props.userLoading && props.userDataGraph.length === 0 &&
            <h2>No Data Available</h2>    
        }
        { props.userDataGraph &&
			<ResponsivePie
				data={props.userDataGraph}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
				borderWidth={1}
				borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                // enableArcLinkLabels={false}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor="#333333"
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: "color" }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
				defs={[
					{
						id: "dots",
						type: "patternDots",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: "lines",
						type: "patternLines",
						background: "inherit",
						color: "rgba(255, 255, 255, 0.3)",
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
			/>
        }
		</>
	);
};

export default PieChart;
