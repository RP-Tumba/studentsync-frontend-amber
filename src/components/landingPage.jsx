import style from './navbar.module.css';

const Componentss = ()=>{


    return (
        
    <div className={style.all}>
     <center><span className={style.spn}>Vibrant Culture</span>
     <h4 className={style.hInB}>The Gym College Student LifeStyle</h4><br></br><br></br>
     <div className={style.linkGym}>
        <a href="">All</a>
        <a href="">Foundation Period</a>
        <a href="">Sports Culture</a>
        <a href="">Project Phase</a>
     </div><br></br><br></br>
     <div className={style.imgy}>
        <div><img src='1.jpg' width={350} height={200}></img> </div>
        <div><img src='2.jpg'  width={350} height={200}></img> </div>
        <div><img src='3.jpg'  width={350} height={200}></img> </div>
     </div>
     </center>
    </div>
    
    );
}

export default Componentss