import { Box, Container, Typography, Grid, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6, 
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" fontWeight={700} gutterBottom>
              <span style={{ color: '#1976d2' }}>Port</span><span style={{ color: '#9c27b0' }}>folio</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" pb={2}>
              Crafting bold & brave interface designs for companies worldwide with over 8 years of experience.
            </Typography>
            <Typography variant="body2" color="text.secondary" pb={2}>
              Follow me on social media for updates and insights!
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton color="primary" size="small" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" size="small" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" size="small" aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" size="small" aria-label="github">
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              Navigation
            </Typography>
            <Link href="/" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              Home
            </Link>
            <Link href="/about" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              About
            </Link>
            <Link href="/projects" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              Projects
            </Link>
            <Link href="/contact" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              Services
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>UI/UX Design</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>Web Development</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>Mobile App Design</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>Brand Strategy</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" color="text.primary" fontWeight={600} gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>chauvukietcma123@gmail.com</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>0837541890</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>Go Vap District, Ho Chi Minh City</Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
  