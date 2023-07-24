import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import MiniNavbar from "./MiniNavbar";
import logo from "../../Images/logo.png";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/" },
  { name: "EXPERIENCE", href: "/" },
  { name: "PROJECT", href: "/" },
  { name: "CONTACT", href: "/" },
];

const drawerWidth = 240;

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");
  const [isHeroSectionOver, setIsHeroSectionOver] = React.useState(false);

  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (typeof window !== "undefined" &&
          window !== "undefined" &&
          window.pageYOffset) ||
        document.documentElement.scrollTop;

      // Determine if the hero section is over
      const heroSection = document.getElementById("Hero");
      if (heroSection) {
        const heroSectionRect = heroSection.getBoundingClientRect();
        setIsHeroSectionOver(scrollTop >= heroSectionRect.bottom);
      }
    };

    if (typeof window !== "undefined" && window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined" && window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  React.useEffect(() => {
    const path = location.pathname;
    setActiveItem(path);
  }, [location]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item, index) => (
          <Link to={item.href} key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  const container = undefined;
  return (
    <>
      {isHeroSectionOver && <MiniNavbar />}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: isHeroSectionOver ? "#0e2a47" : "transparent",
            position: isHeroSectionOver ? "fixed" : "relative",
            boxShadow: isHeroSectionOver
              ? "0 4px 12px rgba(0,0,0,0.15)"
              : "none",
            transition: "background-color 0.3s, position 0.3s, box-shadow 0.3s",
            display: isHeroSectionOver ? "block" : "none",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" className={styles.logoImg} />
            </Typography>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {navItems.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  className={
                    item.href === activeItem ? styles.menuactive : styles.menu
                  }
                >
                  {item.name}
                </Link>
              ))}
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                right: 0,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
    </>
  );
}

export default Navbar;
