import React,{useEffect} from 'react';
import styles from "./Cards.module.css";
import gsap from "gsap";
import img1 from "../assests/expensive.jpg"
import img2 from "../assests/pepperoni.jpg"
import img3 from "../assests/pineapple.jpg"
const Cards = () => {
    useEffect(()=>{
        const divs=document.querySelectorAll(".testimonials")
        gsap.set(divs[1],{x:100,opacity:1});
        gsap 
        .timeline({repeat: -1,defaults:{duration:3}})
         .add("one")
         .to(divs[0],{y:600,x:0,opacity:0.05},"one")
         .to(divs[1],{y:-350,x:0,opacity:0.05},"one")
         .to(divs[2],{y:-450,x:100,opacity:1},"one")

         .add("two")
         .to(divs[0],{y:300,x:100,opacity:1},"two")
         .to(divs[1],{y:300,x:0,opacity:0.05},"two")
         .to(divs[2],{y:-600,x:0,opacity:0.05},"two")

         .add("three")
         .to(divs[0],{y:0,x:0,opacity:0.05},"three")
         .to(divs[1],{y:0,x:100,opacity:1},"three")
         .to(divs[2],{y:0,x:0,opacity:0.05},"three")

    });
  return (
    <div className={styles.content}>
        <div className='testimonials'>
            <div className={styles.container}>
                <div>
                    <img  className={styles.img} alt="pizza1" src={img1}/>
                </div>
                <div className={styles.text}>
                    <h2>John Doe</h2>
                    <h3>CEO</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        <div className='testimonials'>
            <div className={styles.container}>
                <div>
                    <img  className={styles.img} alt="pizza1" src={img2}/>
                </div>
                <div className={styles.text}>
                    <h2>John Doe</h2>
                    <h3>CEO</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        <div className='testimonials'>
            <div className={styles.container}>
                <div>
                    <img  className={styles.img} alt="pizza1" src={img3}/>
                </div>
                <div className={styles.text}>
                    <h2>John Doe</h2>
                    <h3>CEO</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards