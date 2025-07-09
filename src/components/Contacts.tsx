import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Stack,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { TextfieldStyle } from "../styles/TextfieldStyle";
import emailjs from "emailjs-com";
import Snackbar from '@mui/material/Snackbar';

const ContactPage: React.FC = () => {
  const sentence =
    "Feel free to reach out to me for any questions and opportunities!";
  const words = sentence.split(" ");

  const [data,setData] = useState<any>({});
  const [snackbar, setSnackbar] = useState({
  open: false,
  message: '',
  severity: 'success' as 'success' | 'error',
});
const [isSubmitting, setSubmitting] = useState(false);

  const handleChange = (name:any,value:any) => {
    setData({
      ...data,
      [name]:value
    })
  }

// Replace with your EmailJS values
const SERVICE_ID = "service_7a0kgq6";
const TEMPLATE_ID = "template_vk96xuc";
const USER_ID = "s4CAJYdAu908e0CBb"; // or use environment variable

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true)
  const payload = {
    name: data.firstName + " " + data.lastName,
    email: data.mailId,
    phoneNumber: data.phoneNumber,
    subject: data.subject,
    message: data.message, // make sure your textarea uses 'content'
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID)
    .then(() => {
      setData({});
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
    })
    .catch(() => {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again.",
        severity: "error",
      });
    })
    .finally(() => {
      setSubmitting(false); // Re-enable button
    });
};


  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        maxWidth: 800,
        margin: "0 auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            pb: 1,
            color: "#fff",
          }}
        >
          Contact Me
        </Typography>
        <Box
          mt={1}
          height="3px"
          width="120px"
          mx="auto"
          sx={{
            background: "linear-gradient(to right, #8e2de2, #4a00e0)",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant="body1"
          paragraph
          sx={{
            mt: 2,
            fontSize: "1.1rem",
            fontWeight: 500,
            backgroundImage: "linear-gradient(90deg, #a855f7, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </Typography>
      </Box>

      {/* Form Section */}
      <Box component="form" sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField  placeholder="First Name*" fullWidth required sx={TextfieldStyle} 
              value={data.firstName || ''}
              onChange={(e:any) => {
                handleChange('firstName', e.target.value)}} 
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField   placeholder="Last Name*"  fullWidth required sx={TextfieldStyle}  
              value={data.lastName || ''}
              onChange={(e:any) => {
                handleChange('lastName', e.target.value)}} 
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField placeholder="Email Address*" fullWidth required sx={TextfieldStyle} 
              value={data.mailId || ''}
              onChange={(e:any) => {
                handleChange('mailId', e.target.value)}} 
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField  placeholder="Phone Number*" fullWidth required sx={TextfieldStyle} 
              value={data.phoneNumber || ''}
              onChange={(e:any) => {
                handleChange('phoneNumber', e.target.value)}} 
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField  placeholder="Subject*"fullWidth required sx={TextfieldStyle} 
              value={data.subject || ''}
              onChange={(e:any) => {
                handleChange('subject', e.target.value)}} 
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <TextField
              placeholder="How can we help you?"
              fullWidth
              required
              multiline
              rows={4}
              sx={TextfieldStyle}
              value={data.message || ''}
              onChange={(e:any) => {
                handleChange('message', e.target.value)}}  
            />
          </Grid>
        </Grid>
        <Box mt={3} textAlign="left">
          <Button
            disabled={isSubmitting || !data.firstName || !data.lastName || !data.mailId || !data.phoneNumber || !data.subject || !data.message}
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#002F65",
              color: "#fff",
              textTransform: "none",
              px: 4,
              py: 1.5,
              "&:hover": {
                backgroundColor: "#004080",
              },
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center" sx={{ my: 4 }}>
        {[ 
          {
            icon: <WhatsAppIcon />,
            link: "https://wa.me/9788539254",
            color: "success",
          },
          {
            icon: <InstagramIcon />,
            link: "https://www.instagram.com/blacksoul_2204",
            color: "secondary",
          },
          {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/share/1G6oLoGLhc/",
            color: "primary",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <IconButton
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              color={item.color as any}
            >
              {item.icon}
            </IconButton>
          </motion.div>
        ))}
      </Stack>

      <Divider sx={{ width: "100%", my: 2 }} />

      <Box textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Designed & Developed by Malavan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © 2025 Malavan. All rights reserved.
        </Typography>
      </Box>
    </Box>
    <Snackbar
  open={snackbar.open}
  autoHideDuration={3000}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <Alert
    onClose={() => setSnackbar({ ...snackbar, open: false })}
    severity={snackbar.severity}
    sx={{ width: '100%' }}
  >
    {snackbar.message}
  </Alert>
</Snackbar>
</>
  );
};

export default ContactPage;
