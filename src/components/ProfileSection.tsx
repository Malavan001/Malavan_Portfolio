import { Box, Button, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/malavan-profile.jpg";
import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function ProfileSection() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev: number) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const [text] = useTypewriter({
    words: ["Hello, I'm Malavan,"],
    loop: true,
    delaySpeed: 2000,
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.VITE_BASE_URL}resume.pdf`;
    link.download = "Malavan_Resume.pdf";
    link.click();
  };
  

  return (
    <Box
      sx={{
        // backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 12 },
        flexWrap: "wrap",
      }}
    >
      {/* Left Section */}
      <Box flex={1} minWidth="300px">
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
        >
          {text}
          <Cursor cursorStyle="|" />
        </Typography>

        <motion.div
          key={animationKey}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "bold",
              background: "linear-gradient(90deg, #a855f7, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mt: 1,
            }}
          >
            Software Developer
          </Typography>
        </motion.div>

        <Typography
          mt={3}
          sx={{ color: "#cbd5e1", maxWidth: "600px", fontSize: "1.1rem", textAlign:"justify" }}
        >
          Enthusiastic Frontend Developer with expertise in HTML, CSS,
          JavaScript, React.js, Next.js and TypeScript. Skilled in building
          responsive web designs, crafting user-friendly interfaces, and
          optimizing performance. Passionate about developing innovative,
          high-quality web applications and delivering seamless user
          experiences.
        </Typography>

        <Button
          variant="contained"
          onClick={handleDownload}
          sx={{
            mt: 10,
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "50px",
            background: "linear-gradient(to right, #9f68f0, #22d3ee)",
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
            textTransform: "none",
            "&:hover": {
              background: "linear-gradient(to right, #9f68f0, #22d3ee)",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)",
            },
          }}
        >
          Download CV
        </Button>

        {/* Social Media Icons */}
        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <IconButton
            color="primary"
            href="https://github.com/Malavan001"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://wa.me/9788539254"
            target="_blank"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="https://www.linkedin.com/in/malavanm"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            href="mailto:malavan235@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Right Section with Image */}
      <Box
        flex={1}
        minWidth="300px"
        display="flex"
        justifyContent="center"
        mt={{ xs: 4, md: 0 }}
        sx={{
          animation: "fadeIn 0.8s ease-out forwards",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(80px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
      <Box
      sx={{
        width: 370,
        height: 370,
        borderRadius: "50%",
        background: "linear-gradient(to right, #9f68f0, #22d3ee)", // Gradient border
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `
          0 0 15px rgba(159, 104, 240, 0.6),
          0 0 25px rgba(34, 211, 238, 0.4),
          0 0 40px rgba(0, 0, 0, 0.5)
        `, 
      }}
    >
      <Box
        sx={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "#0f172a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "linear-gradient(to right, #9f68f0, #22d3ee)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(129, 140, 248, 0.5)",
          }}
        >
          <Box
            sx={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <img
              src={profilePic}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
      </Box>
    </Box>
  );
}
