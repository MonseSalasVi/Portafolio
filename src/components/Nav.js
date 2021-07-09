import React from "react";
//material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//iconos
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import SchoolIcon from "@material-ui/icons/School";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CardTravelIcon from "@material-ui/icons/CardTravel";

export default function SearchAppBar() {
	return (
		<div className='nav'>
			<AppBar position='static'>
				<Toolbar>
					<div>
						<Typography variant='h6' noWrap>
							Monse Salas
						</Typography>
					</div>
					<div>
					<Button aria-controls='customized-menu' aria-haspopup='true'>
							<AccountCircleIcon fontSize='small' />
						</Button>
						<Button aria-controls='customized-menu' aria-haspopup='true'>
							<CardTravelIcon fontSize='small' />
						</Button>
						<Button aria-controls='customized-menu' aria-haspopup='true'>
							<SchoolIcon fontSize='small' />
						</Button>	
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
