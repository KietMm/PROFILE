// import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Button, IconButton, Paper, Grid } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Email, Phone, LocationOn, GitHub, Instagram } from '@mui/icons-material';

const Contact = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          fontWeight="bold" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 4
          }}
        >
          Let's Connect
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                📬 Contact Information
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<Email />}
                  sx={{ mb: 2, py: 1.5 }}
                >
                  chauvukietcma123@gmail.com
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<Phone />}
                  sx={{ mb: 2, py: 1.5 }}
                >
                  0837541890
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<LocationOn />}
                  sx={{ mb: 2, py: 1.5, bgcolor: '#4CAF50', '&:hover': { bgcolor: '#388E3C' } }}
                >
                  Go Vap District, Ho Chi Minh City
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                🌐 Social Media
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[
                  { icon: <GitHub />, color: '#333', link: 'https://github.com/KietMm' },
                  { icon: <LinkedIn />, color: '#0077B5', link: 'https://www.linkedin.com/in/chauvukietmm11' },
                  { icon: <Facebook />, color: '#1877F2', link: 'https://www.facebook.com/chauvukiet.mm11' },
                  { icon: <Twitter />, color: '#1DA1F2', link: 'https://twitter.com/KietChau11' },
                  { icon: <Instagram />, color: '#E4405F', link: 'https://www.instagram.com/chauvukiet.mm11' },
                ].map((social, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <IconButton
                        sx={{
                          width: '100%',
                          height: 80,
                          bgcolor: `${social.color}15`,
                          '&:hover': { bgcolor: `${social.color}25` },
                          color: social.color
                        }}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            📍 Find Me Here
          </Typography>
          <Box sx={{ mt: 3, borderRadius: 2, overflow: 'hidden' }}>
            <iframe
              title="Google Maps"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.555637291567!2d106.66017267616187!3d10.767946659243314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f50af1b89fd%3A0x55f7a7e7db2a1e49!2zQ8O0bmcgVHkgVMOibiBQaOG6p24gVGjhu4tuaCBUaMOgbmggVGjhu4tuaCBWaeG7h3QgUXXhu5FjIEPDtG5n!5e0!3m2!1svi!2s!4v1712756878432!5m2!1svi!2s"
            ></iframe>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
