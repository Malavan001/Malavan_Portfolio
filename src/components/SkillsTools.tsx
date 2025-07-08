import { Box, Typography, Stack, Grid } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaReact,FaCode } from "react-icons/fa";
import { SiCanva, SiFigma, SiNextdotjs, SiRedux } from "react-icons/si"; 
import { motion } from "framer-motion";


const programmingLanguages = [
  { label: "HTML5", icon: <FaHtml5 size={40} color="#E44D26" /> },
  { label: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { label: "Javascript", icon: <FaJs size={40} color="#F7DF1E" /> },
  { label: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { label: "Next.js", icon: <SiNextdotjs size={40} color="#fff" /> },
  { label: "Redux", icon: <SiRedux size={40} color="#764abc" /> },
];

const toolsTechnologies = [
  { label: "GitHub", icon: <FaGithub size={40} color="#fff" /> },
  { label: "Figma", icon: <SiFigma size={40} color="#A259FF" /> },
  { label: "VS Code", icon: <FaCode size={40} color="#007ACC" /> },
  { label: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
];

export default function SkillsTools() {
  return (
    <Box px={4} py={6} color="#fff">
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
          Skills & Tools
        </Typography>
        <Box
          mt={1}
          height="3px"
          width="150px"
          mx="auto"
          sx={{
            background: "linear-gradient(to right, #8e2de2, #4a00e0)",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Grid container spacing={6} justifyContent="center" alignItems="center">
        
        {[
          {
            title: "Programming Languages",
            items: programmingLanguages,
            border: "linear-gradient(to right, #00c6ff, #0072ff)",
          },
          {
            title: "Tools & Technologies",
            items: toolsTechnologies,
            border: "linear-gradient(to right, #8e2de2, #4a00e0)",
          },
        ].map((section, idx) => ( //item  xs={12} md={6}
            <Grid  key={idx}>
            <Box
              sx={{
                background: "#13161F",
                borderRadius: 3,
                p: 3,
                textAlign: "center",
                border: "2px solid transparent",
                backgroundClip: "padding-box, border-box",
                backgroundImage: `linear-gradient(#13161F, #13161F), ${section.border}`,
                color: "#fff",
              }}
            >
              <Typography variant="h6" mb={3} color="#ffffff">
                {section.title}
              </Typography>
              <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Box textAlign="center" minWidth={80}>
                      <Box mb={1}>{item.icon}</Box>
                      <Typography variant="body1" color="#fff">
                        {item.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
