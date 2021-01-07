import { Layout, Description, Image, Hide } from '../styles';
import home1 from '../img/home1.png';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  //Framer Motion Variant - Avoid the cess pool of props

  return (
    <Layout>
      <Description>
        <motion.div>
          <Hide>
            {/* 
                            Framer Motion Notes: Once this is polished lets move these notes elsewhere

                            effect takes effect the moment the component renders 
                            animate is a live property - so you can update it live with someting like state and a user input
                            Basic logic - add initial and use property to manipulate that 
                            With variatn you pass it in as a variable (see where it is defined above) 
                                - then pass down value for inital and animate as strings (keys we're referencing)
                        */}
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any web development ideas you have - lets taco bout it!
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with camera" />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
