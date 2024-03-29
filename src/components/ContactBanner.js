import React, { Fragment } from 'react';
import PresentText from './PresentText';
import ButtonSectionHeader from './ButtonSectionHeader';
import styled from 'styled-components';


const ContactBannerStyled = styled.div`
    padding: 10rem 0;
    
    .contactBanner__wraper{
        background-color: var(--deep-dark);
        border-radius:12px;
        padding: 4rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 768px){
        .contactBanner__heading{
            font-size: 1.5rem;
        }
    }
        
`;

const ContactBanner = () => {
    return (  
        <Fragment>
            <ContactBannerStyled>
                <div className='container'>
                    <div className='contactBanner__wraper'>
                        <PresentText 
                            mensaje="Have a project in mind"
                        />
                        <h3 className='contactBanner__heading'>
                            Let me help you
                        </h3>
                        <ButtonSectionHeader 
                            btnLink= "/contact"
                            btnText= "Contact Now"
                        />
                    </div>
                </div>
            </ContactBannerStyled>
        </Fragment>
    );
}
 
export default ContactBanner;