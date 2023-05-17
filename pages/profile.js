import NavBar from "@/components/NavBar"
import Head from "next/head"
import Image from "next/image"
import styles from 'styles/Profile.module.css'
export default function Profile() {
    return(
        <>
          <main>               
              <div className={styles.mainContent}>
              <div className={styles.profileContainer}>                  
                <div className={styles.profileInfo}>                     
                   <Image className={styles.profileImage}                      
                        src='/images/UserImage.png'                           
                                                  
                              width={200}                          
                                 height={200} />
                   <h1>Sammy Ham</h1>    
                    <div>                         
                      <div>                           
                          <div>                              
                                   <div className={styles.personalInfo}>                                   
                                          <p>BIRTHDAY</p>                         
                                                  <p>03/20/1999</p>                   
                                                      </div>                   
                                                        <div className={styles.personalInfo}>          
                                                                                                                          
                                                             <p>EMAIL</p>                               
                                                                                                        
                                                                   <p>SammyHam@email.com</p>                
                                    
                                                    </div>                     
                                    </div>               
                           <div>                
            <div className={styles.personalInfo}>                                  
              <p>PHONE</p>                                    
                  <p>(123)456-7777</p>                            
                        </div>                           
                         </div>                                
                                    </div>                                
                                       </div>              
                                       
                                         </div>   
                                         </div>
                                         <NavBar/>    
                                         </div>         
                     </main>                     
       
        

        </>
)
}
