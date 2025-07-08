import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const sections = [
  { label: "About me", id: "about-me" },
  { label: "Skills & Tools", id: "skills-tools" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about-me");

  const handleScroll = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes shine {
        0% {
          background-position: 200% center;
        }
        100% {
          background-position: -200% center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "#0f172a",
        boxShadow:
          "0 4px 6px rgba(159, 104, 240, 0.3), 0 1px 3px rgba(34, 211, 238, 0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: "transparent",
            background: "linear-gradient(to right, #9f68f0, #22d3ee)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            animation: "shine 3s linear infinite",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            display: "inline-block",
            fontSize: "1.8rem",
            ml:4
          }}
        >
          Malavan M
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          {sections.map(({ label, id }) => (
            <Button
              key={id}
              onClick={() => handleScroll(id)}
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                textTransform: "none",
                color: "#fff",
                fontSize: "1rem",
                borderBottom:
                  activeSection === id
                    ? "2px solid #8e2de2"
                    : "2px solid transparent",
                borderRadius: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderImage: "linear-gradient(to right, #8e2de2, #4a00e0)",
                  borderImageSlice: 1,
                  backgroundColor: "transparent",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
