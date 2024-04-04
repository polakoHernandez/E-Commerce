import * as utils from "../utils/Home/utilis";
import "../styles/Home/styles.css";
import { styles } from "../styles/Home/styles.js";

const Home = () => {
  const navigate = utils.useNavigate("");

  return (
    <utils.Box
      sx={{
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <utils.motion.div
        initial={{
          height: "400px",
          width: "100%",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          ease: "easeIn",
        }}
      >
        {/* Section inside pink  */}
        <utils.Grid container>
          {/* left section */}
          <utils.Grid item xs={12} sm={12} md={6} className="right-section">
            <utils.SvgWay></utils.SvgWay>
          </utils.Grid>
          {/* right section */}
          <utils.Grid item xs={12} sm={12} md={6}>
            <utils.Box sx={{ ...styles.rigthSection }}>
              <utils.Box sx={{ ...styles.messageContainer }}>
                <utils.Typography sx={{ ...styles.message }}>
                  "Welcome to our leading store! Explore our range of products
                  by clicking here and start your journey through our store."
                  "Welcome to our leading store! Explore our range of products
                  by clicking here and start your journey through our store."
                </utils.Typography>
              </utils.Box>
              <utils.Box sx={{ ...styles.buttonContainer }}>
                <utils.Button onClick={() => navigate("/store")}></utils.Button>
              </utils.Box>
            </utils.Box>
          </utils.Grid>
        </utils.Grid>
      </utils.motion.div>
    </utils.Box>
  );
};

export default Home;
