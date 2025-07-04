import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Typography, 
  Box, 
  Container,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="primary" elevation={0} sx={{ 
      backgroundColor: 'white', 
      color: 'text.primary',
      borderBottom: '1px solid',
      borderColor: 'divider'
    }}>
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: '56px', sm: '64px' },
            py: { xs: 1, sm: 0 }
          }}
        >
          <Typography 
            variant="h5" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700, 
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>Port</span>
            <span style={{ color: theme.palette.secondary.main }}>folio</span>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="small"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ p: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    width: '200px',
                    borderRadius: 2
                  }
                }}
              >
                <MenuItem 
                  component={Link} 
                  to="/" 
                  onClick={handleClose}
                  sx={{ py: 1.5 }}
                >
                  Home
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/about" 
                  onClick={handleClose}
                  sx={{ py: 1.5 }}
                >
                  About
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/projects" 
                  onClick={handleClose}
                  sx={{ py: 1.5 }}
                >
                  Projects
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/contact" 
                  onClick={handleClose}
                  sx={{ py: 1.5 }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button 
                component={Link} 
                to="/" 
                color="inherit" 
                sx={{ 
                  mx: 1,
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                Home
              </Button>
              <Button 
                component={Link} 
                to="/about" 
                color="inherit"
                sx={{ 
                  mx: 1,
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                About
              </Button>
              <Button 
                component={Link} 
                to="/projects" 
                color="inherit"
                sx={{ 
                  mx: 1,
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                Projects
              </Button>
              <Button 
                component={Link} 
                to="/contact" 
                color="inherit"
                sx={{ 
                  mx: 1,
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                Contact
              </Button>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  ml: 2,
                  borderRadius: '20px',
                  px: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                }}
              >
                Hire Me
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
