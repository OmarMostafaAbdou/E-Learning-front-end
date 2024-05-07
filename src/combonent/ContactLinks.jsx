import style from "./Deteles.module.css";
import fac from '../assets/img/facebook.svg'
import inst from '../assets/img/instagram.svg'
import twit from '../assets/img/twitter.svg'
import tele from '../assets/img/telegram.svg'

function ContactLinks() {
  return (
    <>
      <div className={style.text}>
        <div className="d-flex justify-content-lg-between align-items-center  mt-5">
          <div className="d-flex justify-content-start align-items-center  mt-5 ">
            <p className={style.linkHead}>Call us</p>
          </div>
        </div>
        <h6>+02 0123145648</h6>
      </div>
      <hr className={style.line} />
      <div className={style.text}>
        <div className="d-flex justify-content-lg-between align-items-center  mt-2">
          <div className="d-flex justify-content-start align-items-center">
            <p className={style.linkHead}>Address</p>
          </div>
        </div>
        <p>Aswan ,Egypt</p>
      </div>
      <hr className={style.line} />
      <div className={style.text}>
        <div className="d-flex justify-content-lg-between align-items-center  mt-2">
          <div className="d-flex justify-content-start align-items-center">
            <p className={style.linkHead}>Social media</p>
          </div>
        </div>
        <div>
            <a href="">
                <img src={fac}  className={style.ico}/>
            </a>
            <a href="">
        <img src={inst} className={style.ico}/>
            </a>
            <a href="">
            <img src={tele} className={style.ico}/>
            </a>
            <a href="" className={style.ico}>
            <img src={twit} className={style.ico}/>
            </a>
        </div>
      </div>
    </>
  );
}

export default ContactLinks;
