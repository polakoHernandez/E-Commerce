import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import logo from "../../assets/logo.png";
const Name = () => {
  return (
    <Box sx={{ ...styles.firstContainer }}>
      <div style={{ ...styles.seconContainer }}>
        <motion.div {...properties.m}>M</motion.div>
        <motion.div {...properties.a}>a</motion.div>
        <motion.div {...properties.y}>y</motion.div>
        <motion.div {...properties.o}>o</motion.div>
        <motion.div {...properties.l}>l</motion.div>
        <motion.div {...properties.i}>i</motion.div>
        <motion.div {...properties.s}>S</motion.div>
        <motion.div {...properties.t}>t</motion.div>
        <motion.div {...properties.oo}>o</motion.div>
        <motion.div {...properties.r}>r</motion.div>
        <motion.div {...properties.e}>e</motion.div>
      </div>

      <motion.img {...properties.img}></motion.img>
    </Box>
  );
};

const properties = {
  m: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
  },

  a: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 0.2,
    },
  },

  y: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 0.4,
    },
  },
  o: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0.8,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    transition: {
      delay: 1,
    },
  },
  l: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 1.2,
    },
  },
  i: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 1.4,
    },
  },
  s: {
    initial: {
      y: -100,
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 1.6,
    },
  },
  t: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 1.8,
    },
  },
  oo: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 2,
    },
  },
  r: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 2.2,
    },
  },
  e: {
    initial: {
      y: -100,
      fontFamily: "'Lobster', sans-serif",
      color: "black",
    },
    animate: {
      y: 0,
    },
    transition: {
      delay: 2.4,
    },
  },

  img: {
    src: logo,
    initial: { width: "50px", height: "50px", y: -100 },
    animate: {
      y: 0,
    },
    transition: {
      delay: 2.6,
    },
  },
};

const styles = {
  firstContainer: {
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  },

  seconContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "120px",
  },
};

export default Name;
