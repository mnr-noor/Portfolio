import '../style/main.css'
import Pic from '../assets/pic.png'



function intro(){

    return(
        <>
        <div className='intro'>
            <img className='img' src={Pic} alt='' />
            <span className="intro-title">
                <h1> hi, <span className='intro-name'> Eurekaaa </span> is here </h1>
            </span>
            <div className="intro-subtitle"> I create stuff sometimes.</div>
            <div className="intro-desc">
                Im a computer science student based in Algeria. I have great
                interest in full-stack development, mobile,
                graphic design, and everything in between.
            </div>
        </div>
            </>


    );
    

    





}
export default intro