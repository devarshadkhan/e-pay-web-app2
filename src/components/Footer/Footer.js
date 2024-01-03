import React from 'react'
import styles from "@/styles/components/Footer/Footer.module.css"
import classNames from 'classnames'
const Footer = () => {
    const fullYear = new Date()
  return (
    <>
        <div className={styles.footer}>
            <div className={classNames("container", styles.container)}>
                <div className="row">
                    <div className="col-8">
                        <div className={styles.linksItem}>
                            <ul>
                                <li><a href="">Abouts</a></li>
                                <li><a href="">Blogs</a></li>
                                <li><a href="">Support FAQs</a></li>
                                <li><a href="">Term & Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Contact us</a></li>
                                <li><a href="">company</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.copyRight}>
                           <p>© {fullYear.getFullYear()} payRup | All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer