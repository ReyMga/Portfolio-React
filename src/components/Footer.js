import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;


const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer_col1__title">
                        Raquel Muriega
                    </h1>
                    <PText>
                        A freelance web designer and developer from Buenos Aires, Argentina.
                        I always make websites that have unique design and also has a good performance rate.
                    </PText>
                </div>
                <div className="footer__col2">
                <FooterCol
                heading="important Links"
                links={[
                    {
                    title:'Home',
                    path: '/',
                    type: 'Link',
                    },
                    {
                    title:'About',
                    path: '/about',
                    type: 'Link',
                    },
                    {
                    title:'Projects',
                    path: '/projects',
                    type: 'Link',
                    },
                    {
                        title:'Contact',
                        path: '/contact',
                        type: 'Link',
                        }
                ]}
                
                />
                </div>
                <div className="footer__col3">
                <FooterCol
                 heading="Contact Info"
                 links={
                    [
                     {
                         title:'+1158849980',
                         path: 'tel: +1158849980',
                     },
                     {
                        title:'muriegar@gmail.com',
                        path: 'mailto:muriegar@gmail.com',
                     },
                     {
                        title:'BS.AS Tigre, Argentina',
                        path: 'https://www.google.com/maps/place/Tigre,+Provincia+de+Buenos+Aires/@-34.4267775,-58.5933548,14z/data=!3m1!4b1!4m5!3m4!1s0x95bca5a2d0ddb9b1:0x2c1a974c67cba1e4!8m2!3d-34.425087!4d-58.5796585',
                     },
                    ]
                 }
                />
                </div>
                <div className="footer__col4">
                <FooterCol
                heading="Social Links"
                links={[
                    {
                        title:'Linkedin',
                        path: 'https://www.linkedin.com/in/raquel-muriega-9479491a9/',
                    },
                ]

                }
                />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>
                    © 2021 - Raquel Muriega | Designed By{' '}
                    <a target="_blank" rel="noreferrer" href="http://webmuriega.com">
                    web Mga
                    </a>{' '}
                    </PText>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer
