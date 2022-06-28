/** @format */

import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

export default function Navigation() {
	const [menuActive, setMenuActive] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>
				<PersonIcon /> Profile
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<ManageAccountsIcon /> Account Setting
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<LogoutIcon /> Log out{" "}
			</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit">
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
	return (
		<>
			<nav className={`site-navigation ${menuActive && "active"}`}
				role="navigation">
				<div>
					<span className="menu-title">
						<img
							src={require("../assets/images/logo.png")}
							alt="logo"
							height="60"
							width="60"
						/>
					</span>
				</div>

				<div className="header-search-container">
					<input
						type="search"
						name="search"
						className="search-field"
						placeholder="Enter your product name..."
					/>

					<button class="search-btn">
						<ion-icon name="search-outline"></ion-icon>
					</button>
				</div>
				<div className="menu-content-container">
					<ul class="desktop-menu-category-list">
						<li className="menu-category">
							<a href="#" className="menu-title">
								Home
							</a>
						</li>
						<li className="menu-category">
							<a href="#" className="menu-title">
								Cart
								{/* <ion-icon name="cart-outline"></ion-icon> */}
								<IconButton aria-label="cart">
									<StyledBadge badgeContent={4} color="secondary">
										<ShoppingCartIcon />
									</StyledBadge>
								</IconButton>
							</a>
						</li>
						<li className="menu-category">
							<a href="#" className="menu-title">
								Login
								<LoginIcon />
							</a>
						</li>
						<li className="menu-category">
							<a href="#" className="menu-title">
								Register
								<PersonAddAltIcon />
							</a>
						</li>
					</ul>
					
				</div>
				<div className="menu-avatar-container">
					<Box sx={{ flexGrow: 1 }}>
						<Toolbar>
							<Box sx={{ flexGrow: 1 }} />
							<Box sx={{ display: { xs: "none", md: "flex" } }}>
								<IconButton
									size="large"
									edge="end"
									aria-label="account of current user"
									aria-controls={menuId}
									aria-haspopup="true"
									onClick={handleProfileMenuOpen}
									color="inherit">
									<AccountCircle />
								</IconButton>
							</Box>
							<Box sx={{ display: { xs: "flex", md: "none" } }}>
								<IconButton
									size="large"
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit">
									<MoreIcon />
								</IconButton>
							</Box>
						</Toolbar>
						{renderMobileMenu}
						{renderMenu}
					</Box>
				</div>
					
				<i
					className="icon ionicons ion-ios-menu"
					onClick={(ev) => setMenuActive(!menuActive)}
				/>
			</nav>
		</>
	);
}
