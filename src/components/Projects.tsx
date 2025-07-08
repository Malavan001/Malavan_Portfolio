import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Convex from "../assets/convex.png";
import Tixie from "../assets/tixie.png";
import Neram from "../assets/neram.png";
import { motion } from "framer-motion";

interface Project {
  title: string;
  subTitle?: string;
  description: string;
  techStack: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "Convex",
    subTitle: "Project Management Tool",
    description:
      "Convex is a scalable and dynamic project management web application designed to streamline the planning, tracking, exporting and execution of complex project workflows.",
    techStack: "React Ts, Redux, MUI, Formik",
    image: Convex,
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Tixie",
    subTitle: "Ticketing Tool",
    description:
      "Tixie is a smart ticket management system designed to streamline issue tracking, escalation, and resolution within organizations through a multi-level workflow and customizable roles.",
    techStack: "Next Ts, Redux, MUI, Formik",
    image: Tixie,
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Neram",
    subTitle: "Timesheet Monitor Tool",
    description:
      'Neram is a daily timesheet management system that allows employees to log work hours and supervisors to review and approve entries for efficient time tracking and project oversight.',
    techStack: "Next Ts, Redux, MUI, Formik",
    image: Neram,
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            display: "inline-block",
            pb: 1,
            color: "#fff",
          }}
        >
          Projects
        </Typography>
        <Box
          mt={1}
          height="3px"
          width="100px"
          mx="auto"
          sx={{
            background: "linear-gradient(to right, #8e2de2, #4a00e0)",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          overflowX: "auto",
          pb: 2,
          justifyContent: "center",
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6a11cb",
            borderRadius: 4,
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}  
          >
            <Card
              sx={{
                bgcolor: "#1e293b",
                border: "2px solid #6a11cb",
                borderRadius: 3,
                color: "white",
                display: "flex",
                flexDirection: "column",
                width: 300,
                minWidth: 300,
                flexShrink: 0,
                height: 450,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{ p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {project.subTitle}
                </Typography>
                <Typography variant="body2" color="#cbd5e1" sx={{ mb: 2,textAlign: "justify" }}>
                  {project.description}
                </Typography>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  Tech Stack :
                </Typography>
                <Typography variant="body2" color="#cbd5e1">
                  {project.techStack}
                </Typography>
              </CardContent>
              {/* <Box sx={{ p: 2, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #9f68f0, #22d3ee)",
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                    textTransform: "none",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      background: "linear-gradient(to right, #9f68f0, #22d3ee)",
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
                    },
                  }}
                  href={project.liveLink}
                >
                  Live preview
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    textTransform: "none",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                    },
                  }}
                  href={project.githubLink}
                >
                  Check on GitHub
                </Button>
              </Box> */}
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
