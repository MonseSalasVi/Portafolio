import React from "react";
//material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
//iconos
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

export default function SearchAppBar() {
	return (
		<div className='nav'>
			<AppBar position='fixed'>
				<Toolbar>
					<div>
						<Typography variant='h6' noWrap>
							Monse Salas
						</Typography>
					</div>
					<div>
					<Link aria-controls='customized-menu' href="#aboutme" aria-haspopup='true'>
							<AccountCircleIcon fontSize='large' />
						</Link>
						<Link aria-controls='customized-menu' href="#experience" aria-haspopup='true'>
							<BusinessCenterIcon fontSize='large' />
						</Link>
						<Link aria-controls='customized-menu' href="#proyects" aria-haspopup='true' to="#education">
							<FolderOpenIcon fontSize='large' />
						</Link>	
						<Link aria-controls='customized-menu' href="#education" aria-haspopup='true'>
							<SchoolIcon fontSize='large' />
						</Link>	
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
