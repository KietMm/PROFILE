// import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia, Avatar, Chip, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box 
        sx={{
          pt: { xs: 8, sm: 10, md: 16 },
          pb: { xs: 6, sm: 8, md: 12 },
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
          borderRadius: { xs: '0 0 0 50px', md: '0 0 0 100px' },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ 
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 }
            }}>
              <Box sx={{ mb: 4 }}>
                <Chip 
                  label="UI/UX Designer" 
                  color="primary" 
                  size="small" 
                  sx={{ mb: 2, fontWeight: 500, borderRadius: '16px' }} 
                />
                <Typography 
                  variant="h2" 
                  component="h1"
                  fontWeight="800"
                  lineHeight={1.2}
                  mb={2}
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(90deg, #1976d2 0%, #9c27b0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Creating Bold & Brave Interfaces
                </Typography>
                <Typography 
                  variant="h6"
                  color="text.secondary"
                  mb={3}
                  lineHeight={1.6}
                  sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Hi, I'm a UI/UX Designer with 8+ years of experience crafting user-centered designs that enhance experiences and drive engagement. 
                  Check out my latest projects below!
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    component={Link}
                    to="/contact"
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      borderRadius: '30px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 10px 20px rgba(25, 118, 210, 0.3)'
                    }}
                  >
                    Let's Talk
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    component={Link}
                    to="/projects"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      px: 3,
                      py: 1.5,
                      borderRadius: '30px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderWidth: '2px'
                    }}
                  >
                    View Portfolio
                  </Button>
                </Stack>

                <Box 
                  sx={{ 
                    display: 'flex', 
                    gap: 3, 
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="span" fontWeight="bold" color="primary">
                      8+
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      Years<br />Experience
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="span" fontWeight="bold" color="primary">
                      50+
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      Projects<br />Completed
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" component="span" fontWeight="bold" color="primary">
                      30+
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      Happy<br />Clients
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ 
              position: 'relative',
              order: { xs: 1, md: 2 },
              mb: { xs: 4, md: 0 }
            }}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: '300px', md: '400px' }
                }}
              >
                <Box 
                  sx={{ 
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    background: 'linear-gradient(120deg, rgba(25,118,210,0.1) 0%, rgba(156,39,176,0.1) 100%)',
                    position: 'absolute',
                    zIndex: 0
                  }} 
                />
                <Avatar
                  alt="Chau Vu Kiet"
                  src="/TotNghiep.jpg"
                  sx={{
                    width: { xs: 220, md: 280 },
                    height: { xs: 220, md: 280 },
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '5px solid white',
                    zIndex: 1
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" component="p" color="primary" fontWeight="bold">
            WHAT I DO
          </Typography>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            My Expertise
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            I help brands and companies create exceptional digital experiences through thoughtful design and strategic thinking.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              title: 'UI/UX Design',
              description: 'Creating intuitive interfaces with exceptional user experience that engage and convert.',
              icon: '🎨'
            },
            {
              title: 'Web Development',
              description: 'Transforming designs into responsive, accessible, and performant websites.',
              icon: '💻'
            },
            {
              title: 'Mobile Design',
              description: 'Crafting beautiful mobile interfaces for iOS and Android platforms.',
              icon: '📱'
            },
            {
              title: 'Brand Strategy',
              description: 'Developing comprehensive brand identities that resonate with target audiences.',
              icon: '✨'
            }
          ].map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h2" component="div" sx={{ mb: 2 }}>
                    {skill.icon}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" component="p" color="primary" fontWeight="bold">
              PORTFOLIO
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Featured Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
              A selection of my latest and most significant work across different domains.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: 'E-commerce Website',
                category: 'Web Design',
                image: 'https://placehold.co/600x400/1976d2/white?text=E-commerce'
              },
              {
                title: 'Finance App',
                category: 'Mobile App',
                image: 'https://placehold.co/600x400/9c27b0/white?text=Finance+App'
              },
              {
                title: 'AI Chatbot Interface',
                category: 'UI/UX',
                image: 'https://placehold.co/600x400/ff9800/white?text=AI+Chatbot'
              }
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight="medium">
                      {project.category}
                    </Typography>
                    <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Button 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        fontWeight: 'medium',
                        textTransform: 'none',
                        p: 0,
                        '&:hover': { bgcolor: 'transparent', color: 'primary.dark' }
                      }}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary"
              size="large"
              component={Link}
              to="/projects"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 'bold',
                borderWidth: '2px'
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Me Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" component="p" color="primary" fontWeight="bold">
              WHY CHOOSE ME
            </Typography>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Proven Results That Speak for Themselves
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              With a strategic approach and attention to detail, I deliver designs that not only look great but also achieve tangible business outcomes.
            </Typography>
            
            <List>
              {[
                'Result-driven approach with measurable outcomes',
                'Deep understanding of user behavior and psychology',
                'Seamless collaboration with development teams',
                'Adherence to accessibility standards and best practices',
                'Ongoing support and maintenance'
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: '36px' }}>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            
            <Button 
              variant="contained" 
              color="primary"
              size="large" 
              component={Link}
              to="/about"
              sx={{ 
                mt: 2,
                px: 4, 
                py: 1.5,
                borderRadius: '30px',
                textTransform: 'none',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(25, 118, 210, 0.3)'
              }}
            >
              More About Me
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://placehold.co/600x500/1976d2/white?text=Designer+at+Work"
              alt="Designer at Work"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: 'primary.main',
          color: 'white',
          borderRadius: '30px 0 30px 0',
          mx: { xs: 2, md: 8 },
          my: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }} 
        />
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }} 
        />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Ready to Create Something Amazing?
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Let's collaborate and bring your ideas to life with stunning designs.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            sx={{ 
              px: 5, 
              py: 1.8,
              borderRadius: '30px',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)'
              }
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
