import * as React from "react";
import {
  AppBar,
  Box,
  Button,
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
import { Link as ScrollLink } from "react-scroll";
import logo from "../../Images/logo.png";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../Images/Harsh Sinha Resume.pdf";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import CancelIcon from "@mui/icons-material/Cancel";

const navItems = [
  { name: "HOME", href: "Hero", icon: <AiFillHome /> },
  { name: "ABOUT", href: "About", icon: <SiAboutdotme /> },
  { name: "PROJECT", href: "Project", icon: <AiOutlineFundProjectionScreen /> },
  { name: "CONTACT", href: "Contact", icon: <AiOutlineContacts /> },
];

const drawerWidth = 240;

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isHeroSectionOver, setIsHeroSectionOver] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDownloadPdf = () => {
    const pdfPath = resume; // Replace with the actual path to your PDF file
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Harsh Sinha Resume.pdf"; // Replace with the desired file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Determine if the hero section is over
      const heroSection = document.getElementById("Hero");
      if (heroSection) {
        const heroSectionRect = heroSection.getBoundingClientRect();
        if (heroSectionRect.bottom <= 123) {
          setIsHeroSectionOver(true);
        } else {
          setIsHeroSectionOver(false);
        }
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

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "white",
      }}
    >
      <List>
        {navItems.map((item, index) => (
          <ScrollLink
            activeClass={styles.menuactive}
            to={item.href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.menu}
            onClick={handleDrawerToggle}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "left", marginLeft: "25%" }}>
                {item.icon}
                <ListItemText primary={item.name} sx={{ marginLeft: "10px" }} />
              </ListItemButton>
            </ListItem>
          </ScrollLink>
        ))}
        <Button
          sx={{
            backgroundColor: "#db8e35",
            color: "white",
            marginTop: "20px",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#f7ac56",
            },
          }}
          variant="contained"
          onClick={handleDownloadPdf}
        >
          Resume <DownloadIcon />
        </Button>
      </List>
    </Box>
  );
  const container = undefined;
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundImage: isHeroSectionOver
              ? " linear-gradient(25deg, #011a2e , #071017)"
              : "tansparent",
            position: isHeroSectionOver ? "fixed" : "relative",
            boxShadow: isHeroSectionOver
              ? "0 4px 12px rgba(0,0,0,0.15)"
              : "none",
            transition: "background-color 0.3s, position 0.3s, box-shadow 0.3s",
            display: isHeroSectionOver ? "block" : "none",
            borderBottom: isHeroSectionOver
              ? "5px solid #db8e35"
              : "5px solid transparent",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" className={styles.logoImg} />
            </Typography>

            <Hidden mdDown sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {navItems.map((item, index) => (
                  <ScrollLink
                    activeClass={styles.menuactive}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={styles.menu}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </Box>
            </Hidden>
            <Hidden mdDown sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    sx={{
                      backgroundColor: "#db8e35",
                      color: "white",
                      marginRight: "10px",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "#f7ac56",
                      },
                    }}
                    variant="contained"
                    onClick={handleDownloadPdf}
                  >
                    Resume <DownloadIcon />
                  </Button>
                  <ScrollLink
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#db8e35",
                        color: "white",
                        transition: "background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#f7ac56",
                        },
                      }}
                    >
                      Hire Me
                    </Button>
                  </ScrollLink>
                </Box>
              </Typography>
            </Hidden>
            <Hidden mdUp sx={{ flexGrow: 1 }}>
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
          </Toolbar>
        </AppBar>
        <Hidden
          mdUp
          sx={{
            backgroundImage: isHeroSectionOver
              ? " linear-gradient(25deg, #011a2e , #071017)"
              : "tansparent",
          }}
        >
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
                backgroundImage: isHeroSectionOver
                  ? " linear-gradient(25deg, #011a2e , #071017)"
                  : "tansparent",
              },
            }}
          >
            <CancelIcon
              sx={{ marginLeft: "10px", marginTop: "10px", color: "white" }}
              onClick={handleDrawerToggle}
            />
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
    </>
  );
}

export default Navbar;
