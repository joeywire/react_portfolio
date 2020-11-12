import styled from 'styled-components';

import home1 from '../img/home1.png'


const AboutSection = () => {
    return (
        <AboutSC className="about">
            <DescriptionSC>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any web development ideas you have - lets taco bout it!</p>
                <button>Contact Us</button>
            </DescriptionSC>
            <ImageSC>
                <img src={home1} alt="Guy with camera"/>
            </ImageSC>
        </AboutSC>
    );
};

//Styled Component 
const AboutSC = styled.div`
    min-height: 90vh;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const DescriptionSC = styled.div`
    flex: 1; 
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;

const ImageSC = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;