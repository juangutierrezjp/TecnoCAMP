import React from "react";
import { Row, Col } from 'antd';
import styles from "./Contacticons.module.css"

const Contacticons = () => {
    return (
       <Row>
        <Col flex="200px"> <div>
                 <button className={styles.button}>
                     <svg width="20" height="20" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M44.3685 9.79004H12.2852C10.4618 9.79004 8.71311 10.5144 7.4238 11.8037C6.13448 13.093 5.41016 14.8417 5.41016 16.665V39.5817C5.41016 41.4051 6.13448 43.1537 7.4238 44.4431C8.71311 45.7324 10.4618 46.4567 12.2852 46.4567H44.3685C46.1918 46.4567 47.9405 45.7324 49.2298 44.4431C50.5192 43.1537 51.2435 41.4051 51.2435 39.5817V16.665C51.2435 14.8417 50.5192 13.093 49.2298 11.8037C47.9405 10.5144 46.1918 9.79004 44.3685 9.79004ZM44.3685 14.3734L29.4727 24.6171C29.1243 24.8183 28.7291 24.9241 28.3268 24.9241C27.9245 24.9241 27.5294 24.8183 27.181 24.6171L12.2852 14.3734H44.3685Z" fill="white" />
                     </svg>
                 </button>

                 <svg width="20" height="20" viewBox="0 0 2 63" fill="none" xmlns="http://www.w3.org/2000/svg" >
                     <line x1="1.02637" y1="0.525391" x2="1.02636" y2="62.4948" stroke="white" />
                 </svg>

                 <button className={styles.button}>
                     <svg width="20" height="20" viewBox="0 0 60 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M35.1309 22.4033C37.3189 22.4033 39.4173 23.2725 40.9645 24.8197C42.5117 26.3669 43.3809 28.4653 43.3809 30.6533C43.3809 31.3827 43.6706 32.0821 44.1863 32.5979C44.702 33.1136 45.4015 33.4033 46.1309 33.4033C46.8602 33.4033 47.5597 33.1136 48.0754 32.5979C48.5911 32.0821 48.8809 31.3827 48.8809 30.6533C48.8809 27.0066 47.4322 23.5092 44.8536 20.9306C42.275 18.352 38.7776 16.9033 35.1309 16.9033C34.4015 16.9033 33.702 17.1931 33.1863 17.7088C32.6706 18.2245 32.3809 18.924 32.3809 19.6533C32.3809 20.3827 32.6706 21.0821 33.1863 21.5979C33.702 22.1136 34.4015 22.4033 35.1309 22.4033Z" fill="white" />
                         <path d="M35.1309 11.4033C40.2363 11.4033 45.1326 13.4314 48.7427 17.0415C52.3527 20.6516 54.3809 25.5479 54.3809 30.6533C54.3809 31.3827 54.6706 32.0821 55.1863 32.5979C55.702 33.1136 56.4015 33.4033 57.1309 33.4033C57.8602 33.4033 58.5597 33.1136 59.0754 32.5979C59.5911 32.0821 59.8809 31.3827 59.8809 30.6533C59.8809 24.0892 57.2733 17.794 52.6317 13.1524C47.9902 8.5109 41.695 5.90332 35.1309 5.90332C34.4015 5.90332 33.702 6.19305 33.1863 6.70878C32.6706 7.2245 32.3809 7.92397 32.3809 8.65332C32.3809 9.38267 32.6706 10.0821 33.1863 10.5979C33.702 11.1136 34.4015 11.4033 35.1309 11.4033Z" fill="white" />
                         <path d="M59.1934 44.1558C59.0421 43.7144 58.781 43.3186 58.4346 43.0059C58.0882 42.6932 57.6679 42.4738 57.2134 42.3683L40.7134 38.6008C40.2655 38.4993 39.7993 38.5115 39.3574 38.6364C38.9154 38.7613 38.5118 38.9949 38.1834 39.3158C37.7984 39.6733 37.7709 39.7008 35.9834 43.1108C30.0522 40.3778 25.2996 35.6057 22.5909 29.6633C26.0834 27.9033 26.1109 27.9033 26.4684 27.4908C26.7893 27.1624 27.0229 26.7587 27.1478 26.3168C27.2727 25.8749 27.2849 25.4087 27.1834 24.9608L23.4159 8.65332C23.3104 8.19873 23.091 7.77847 22.7783 7.43208C22.4655 7.08569 22.0698 6.82458 21.6284 6.67332C20.9861 6.44394 20.323 6.27815 19.6484 6.17832C18.9533 6.01716 18.244 5.92504 17.5309 5.90332C14.1759 5.90332 10.9583 7.23608 8.58596 9.60842C6.21362 11.9808 4.88086 15.1983 4.88086 18.5533C4.89541 29.7808 9.36195 40.5442 17.301 48.4832C25.24 56.4222 36.0034 60.8888 47.2309 60.9033C48.8921 60.9033 50.537 60.5761 52.0718 59.9404C53.6066 59.3047 55.0011 58.3729 56.1758 57.1982C57.3504 56.0236 58.2822 54.629 58.9179 53.0943C59.5536 51.5595 59.8809 49.9145 59.8809 48.2533C59.8817 47.5534 59.8265 46.8545 59.7159 46.1633C59.6003 45.4803 59.4254 44.8086 59.1934 44.1558ZM47.2309 55.4033C37.4599 55.396 28.0912 51.5113 21.182 44.6022C14.2729 37.693 10.3881 28.3243 10.3809 18.5533C10.3881 16.6593 11.1437 14.8448 12.483 13.5055C13.8224 12.1662 15.6368 11.4106 17.5309 11.4033H18.4384L21.3809 24.1633L19.8959 24.9333C17.5309 26.1708 15.6609 27.1608 16.6509 29.3058C18.263 33.8697 20.8715 38.0171 24.2869 41.4467C27.7023 44.8764 31.8388 47.5022 36.3959 49.1333C38.7059 50.0683 39.6134 48.3358 40.8509 45.9433L41.6484 44.4308L54.3809 47.3458V48.2533C54.3736 50.1474 53.618 51.9618 52.2787 53.3011C50.9393 54.6404 49.1249 55.3961 47.2309 55.4033Z" fill="white" />
                     </svg>
                 </button>

           </div></Col>
        <Col flex="auto"></Col>
       </Row>
    )
}
export default Contacticons;

 