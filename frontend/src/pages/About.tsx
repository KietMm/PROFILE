// import React from 'react';
import { Container, Typography, Grid, Avatar, Paper, List, ListItem, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, School, EmojiEvents } from '@mui/icons-material';

const About = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Avatar
                alt="Chau Vu Kiet"
                src="/TotNghiep.jpg"
                sx={{
                  width: 220,
                  height: 220,
                  mx: 'auto',
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2
              }}
            >
              Chau Vu Kiet
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              Fullstack Developer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              A passionate Fullstack Developer aiming to work in a creative and professional environment to continuously learn, enhance skills, and contribute value to projects and companies.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            {
              icon: <Code sx={{ fontSize: 40 }} />,
              title: "Technical Skills",
              content: [
                "Frontend: React.js, Vue.js, Next.js",
                "Backend: Python Flask, Node.js",
                "Database: MongoDB, MySQL",
                "DevOps: Docker, GitLab CI/CD",
                "Others: Git, RESTful API, WebSocket"
              ]
            },
            {
              icon: <EmojiEvents sx={{ fontSize: 40 }} />,
              title: "Work Experience",
              content: [
                "Fullstack Developer at Solazu SJC (08/2024 - Present)",
                "Intern Fullstack Developer at Solazu SJC (06/2024 - 08/2024)",
                "Various Project Contributions"
              ]
            },
            {
              icon: <School sx={{ fontSize: 40 }} />,
              title: "Education",
              content: [
                "University of Transport Ho Chi Minh City",
                "Major: Information Technology",
                "2020 - 2024"
              ]
            }
          ].map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ y: -10 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    textAlign: 'center'
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <List>
                    {section.content.map((item, i) => (
                      <ListItem key={i} sx={{ justifyContent: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default About;
