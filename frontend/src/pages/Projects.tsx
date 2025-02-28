import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  List,
  ListItem,
  Button,
} from "@mui/material";
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const projects = [
  {
    title: "CRM (Project Management Application)",
    description: "A modern CRM system with user and company management features using Next.js, MongoDB, and SSR optimization.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%234158D0'/%3E%3Cstop offset='100%25' stop-color='%23C850C0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "Web",
    tags: ["Next.js", "MongoDB", "SSR"],
    demoLink: "https://demo.com/crm",
    githubLink: "https://github.com/KietMm/crm"
  },
  {
    title: "AI Realtime Translator",
    description: "Real-time language translation application with NLP integration and optimized user experience.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%2300DBDE'/%3E%3Cstop offset='100%25' stop-color='%23FC00FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "AI",
    tags: ["Python", "HTML/CSS/JS", "NLP"],
    demoLink: "https://demo.com/translator",
    githubLink: "https://github.com/KietMm/translator"
  },
  {
    title: "WEB AI-AGENT",
    description: "AI-powered chatbot interface with GitLab CI/CD integration and MongoDB backend.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%238EC5FC'/%3E%3Cstop offset='100%25' stop-color='%23E0C3FC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "Web",
    tags: ["Vue.js", "Python", "MongoDB"],
    demoLink: "https://demo.com/ai-agent",
    githubLink: "https://github.com/KietMm/ai-agent"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React and Material-UI.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%23FA8BFF'/%3E%3Cstop offset='100%25' stop-color='%232BD2FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "Web",
    tags: ["React", "Material-UI", "Responsive"],
    demoLink: "https://demo.com/portfolio",
    githubLink: "https://github.com/KietMm/portfolio"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%23FF3CAC'/%3E%3Cstop offset='100%25' stop-color='%23784BA0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "Web",
    tags: ["Next.js", "MongoDB", "Stripe"],
    demoLink: "https://demo.com/ecommerce",
    githubLink: "https://github.com/KietMm/ecommerce"
  },
  {
    title: "Task Management App",
    description: "Mobile-first task management application with real-time updates.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0' stop-color='%2308AEEA'/%3E%3Cstop offset='100%25' stop-color='%232AF598'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E",
    category: "Mobile",
    tags: ["React Native", "Firebase"],
    demoLink: "https://demo.com/task-app",
    githubLink: "https://github.com/KietMm/task-app"
  }
];

const categories = ["All", "Web", "Mobile", "AI"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          fontWeight="bold" 
          sx={{
            background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 3
          }}
        >
          My Projects
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 'bold',
                mx: 1,
              }
            }}
          >
            {categories.map((category) => (
              <Tab 
                key={category} 
                label={category} 
                value={category}
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            borderRadius: '8px',
                            fontWeight: 500,
                            bgcolor: 'primary.light',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button
                        variant="contained"
                        startIcon={<GitHub />}
                        size="small"
                        sx={{ flex: 1 }}
                      >
                        Code
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Launch />}
                        size="small"
                        sx={{ flex: 1 }}
                      >
                        Demo
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
