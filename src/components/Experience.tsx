import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import { motion } from "framer-motion";
  
  export default function Experience() {
    return (
      <Box sx={{ color: "#fff", p: 4 }}>
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
            My Experience
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
  
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              borderRadius: "20px",
              background:
                "linear-gradient(#0d1117, #0d1117) padding-box, linear-gradient(to right, #6a11cb, #2575fc) border-box",
              border: "2px solid transparent",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  src="/cms-logo.png"
                  alt="HEPL Logo"
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="h5" fontWeight="bold">
                  HEPL (Cavinkare group of company)
                </Typography>
              </Box>
  
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Feb 2024 – Present
              </Typography>
  
              <List>
                {[
                  "Designed and developed dynamic, responsive web applications using React.js (TypeScript), Redux for statemanagement, Formik for form validation, and Material-UI (MUI) for UI design.",
                  "Collaborated with designers and backend developers to integrate APIs, ensuring seamless data flow between frontend and backend with a focus on efficient data handling.",
                  "Utilized Git for version control and efficient code collaboration, ensuring smooth code transfer and team synchronization.",
                  "Optimized application performance and implemented best practices for scalability and maintainability.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <ListItem disableGutters sx={{ alignItems: "flex-start" }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(to right, #5eead4, #818cf8)",
                            boxShadow:
                              "0 0 15px #5eead4, 0 0 15px #818cf8",
                            mt: 1.2,
                          }}
                        />
                      </ListItemIcon>
  
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          fontSize: "1rem",
                          color: "#c9d1d9",
                        }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    );
  }
  