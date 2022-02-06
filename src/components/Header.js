import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from "@mui/material";

function Header({handleToggle, products}) {
	let totalItems = products.length>0 ? products.reduce((a,b) => a.count + b.count) : 0;
	let totalPrice = 0
	products.forEach(product => totalPrice += product.count * product.price)

	return (
		<Grid container
    direction="column"
    justifyContent="flex-end"
    alignItems="stretch">
    <Grid xs={12} md={12} item className='headerContainer'>
	<div className="headerContent">
			<div className='headerBar'>
				<div className='cartInfo'>
					<div className='cartPrice'>
						<div>{`$${totalPrice}`}</div>
						<div style={{ display: "flex", cursor: "pointer" }}>
							{totalItems} Items <ArrowDropDownIcon />
						</div>
					</div>
					<img src='' alt=''/>
					<div className='cartIcon' onClick={handleToggle}>
						<ShoppingCartIcon fontSize='large' />
					</div>
				</div>
			</div>
		</div>
		</Grid>
	</Grid>
	);
}

export default Header;
