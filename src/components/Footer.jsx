import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import styles from './Footer.module.css';

const Footer = () => {
  return (
   <div className={styles.footer}>
        <div className={styles.main}>
                   <div className={styles.footerRight}>
                     <h2>STUDENTSYNC MANAGEMENT APP</h2>
                     <p className={styles.title}>Students management platform</p>
                     
                          <h4>Our address</h4>
                          <div className={styles.address}>
                                  <div className={styles.icons}>
                                      <LocationOnIcon/>
                                       <QueryBuilderIcon/>
                                   </div>

                                   <div className={styles.addressContent}>
                                      <p>Gasabo district,Kinyinya Sector, Mutarama cell, Rusenyi village <br className={styles.responsiveBreak} />
                                      KG 566 St, Kigali,Rwanda</p>
                                      <p>Working Hours: Monday- Friday: 08:00-17:00</p>
                                   </div>
                          </div>
                          
                      
                   </div>

                   <div className={styles.footerLeft}>
                      <div className={styles.conctact}>
                          <h4>Contact us</h4>
                             <p><a href="mailto:info@thegymcapstone.rw"><EmailIcon className={styles.contactIcons}/>info@thegymcapstone.rw</a>
                              </p>
                              <p>
                                <a href="tel:+250788322223"><CallIcon/>0788-322-223</a>

                              </p>
                      </div>
                      <div className={styles.conctact}>
                          <h4>Social Media</h4>
                            <div className={styles.mediaIcons}>
                              <InstagramIcon/>
                              <FacebookIcon/>
                              <YouTubeIcon/>
                            </div>

                              
                      </div>
                   </div>
        </div>

        <div className={styles.footerEnd}>
           <p>
            &copy; Copyright StudentSync. All Rights Reserved
           </p>
        </div>
   </div>
  )
}

export default Footer
