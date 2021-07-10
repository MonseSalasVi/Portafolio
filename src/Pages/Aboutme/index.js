import React from "react";
import Monse from "../../assets/personal/Monse.jpeg";

//material
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

//iconos
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";

function Aboutme() {

	return (
		<div className='intro'  id='aboutme'>
			<div className='img-container'>
				<img alt="Monse.png" className='fotoPerfil' src={Monse} />{" "}
			</div>
			<div className='about' >
				<div className='about-title'>
					<Typography variant='h2'>Front-end Developer</Typography>
				</div>
				<div className='about-me'>
					<div>
						<Typography>
							Front-end developer with experience in JavaScript, React.js, CSS,
							Firebase, HTML, Sass, GitHub, Jest, UX. Always on the lookout for
							opportunities to develop my aptitudes.
						</Typography>
					</div>
					<div>
						<Typography>
							I am a woman who likes challenges, I am proactive, passionate and
							I am constantly learning new things.
						</Typography>
					</div>
				</div>
				<div className='datos-cel'>
					<Typography>
						<RoomIcon fontSize='small' />
					</Typography>
					<Link
						target='_blank'
						href='https://www.linkedin.com/in/monse-salasv/'>
						<LinkedInIcon fontSize='small' />
					</Link>
					<Link target='_blank' href='https://github.com/MonseSalasVi'>
						<GitHubIcon fontSize='small' />
					</Link>
					<Link href='mailto:cmonsev@gmail.com'>
						<AlternateEmailIcon fontSize='small' />
					</Link>
					<Link href='tel:+528116399699'>
						<PhoneIcon fontSize='small' />
					</Link>
				</div>
				<div className='datos'>
					<Typography>
						<RoomIcon fontSize='small' /> Zapopan, Jalisco, México.
					</Typography>
					<Link
						target='_blank'
						href='https://www.linkedin.com/in/monse-salasv/'>
						<LinkedInIcon fontSize='small' /> /in/monse-salasv
					</Link>
					<Link target='_blank' href='https://github.com/MonseSalasVi'>
						<GitHubIcon fontSize='small' /> /MonseSalasVi
					</Link>
					<Link href='mailto:cmonsev@gmail.com'>
						<AlternateEmailIcon fontSize='small' /> cmonsev@gmail.com
					</Link>
					<Link href='tel:+528116399699'>
						<PhoneIcon fontSize='small' /> 8116399699
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Aboutme;
