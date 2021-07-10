import React, { useState } from "react";

//material
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
//iconos
import LinkIcon from "@material-ui/icons/Link";

function Card(props) {
	const [selectCard, setSelectCard] = useState(false);
	const urlImg = "../img/proyects/" + props.props.img;

	const [open, setOpen] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const handleClickOpen = (data) => {
		if (data) {
			setSelectCard(data);
		}
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div
			className='card'
			key={props.props.nombre}
			onClick={() => {
				handleClickOpen(props.props);
			}}>
			<div className='card-img'>
				<img src={urlImg} alt='props.nombre'></img>
				<Typography> {props.props.nombre}</Typography>
			</div>

			<div className='card-modal'>
				<Dialog
					fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby='responsive-dialog-title'>
					<DialogTitle id='responsive-dialog-title'>
						{selectCard.nombre}
					</DialogTitle>
					<DialogContent>
						<div className='container-img'>
							<img src={urlImg} alt='props.nombre'></img>
						</div>
						<div className='container-text'>
							<Typography className='descripcion'>
								{" "}
								Description: {selectCard.descripcion}
							</Typography>
							<Divider />
							<Typography className='tools'>
								{" "}
								Tools: {selectCard.tools}
							</Typography>
							<Link target='_blank' href={selectCard ? selectCard.url : null}>
								<LinkIcon fontSize='small' /> {selectCard.nombre}
							</Link>
							<Typography className='tools'>
								{" "}
								 {selectCard.fecha}
							</Typography>
						</div>
					</DialogContent>
					<DialogActions>
						<Button id='btn-close' onClick={handleClose} >
						Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}

export default Card;
