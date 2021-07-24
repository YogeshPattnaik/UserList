import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
    Avatar,
    CircularProgress
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
});

const TableList = (props) => {
    const classes = useStyles();

	return (
		<div className="table">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell style={{fontWeight: 700}}>
                                <PersonIcon />
                            </TableCell>
							<TableCell align="center" style={{fontWeight: 700}}>Name</TableCell>
							<TableCell align="center" style={{fontWeight: 700}}>Email</TableCell>
							<TableCell align="center" style={{fontWeight: 700}}>Salary</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
                        {props.userLoading && props.userData.length === 0 ? (
                            <TableRow>
							<TableCell component="th" scope="row"></TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="center">
                                <CircularProgress />
                            </TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
                        ) : (
                            !props.userLoading && props.userData.length === 0 &&
                            <TableRow>
							<TableCell component="th" scope="row"></TableCell>
							<TableCell align="center">
                                No Data Available
                            </TableCell>
							<TableCell align="center"></TableCell>
						</TableRow>
                        )}
                        {props.userData.map((item) => {
                            console.log(item.firstName)
                            return(
						<TableRow key={item.id}>
							<TableCell component="th" scope="row">
								<Avatar src={item.picture} alt="user image"/>
							</TableCell>
							<TableCell align="center">{item.title} {item.firstName} {item.lastName}</TableCell>
							<TableCell align="center">{item.email}</TableCell>
							<TableCell align="center">₹{item.salary}</TableCell>
						</TableRow>
                            )
                        })}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TableList;
