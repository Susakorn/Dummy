import './4.css'
import {Link} from 'react-router-dom'
import imgs from './dummy2.png'
import img from './kk.jpg'
import img1 from './e1.png'
import img2 from './e2.png'
import img3 from './e3.png'
import img4 from './e4.png'
import img5 from './e5.png'

function Home() {
    return (
        <>
            <nav>         
                <div class="nav-bar">
                    <div class="logo">
                        <Link to = '/'><img className='' src={imgs}/></Link>
                    </div>
                        <ul class="menu text-center">
                            <li class="nav-link"><Link to = '/'>เครื่องมือวัดค่าความชื้นในดิน</Link></li>
                            <li class="nav-link"><Link to = '/picture'>แสดงวีดิโอ</Link></li>
                            {/* <li class="nav-link"><Link to = '/soil'>แสดงกราฟ</Link></li> */}
                            <li class="nav-link"><Link to = '/soils'>แสดงกราฟ</Link></li>                   
                        </ul>       
                </div>
            </nav >
            <div className='container'>
                <div class="word">
                    <h1 class="big">
                        เครื่องมือวัดค่าความชื้น <br /> ในดินและอากาศ</h1> <br />
                    <h3 class="smail">
                        <small>
                        เครื่องมือวัดความชื้นในดินเเละอากาศออกเเบบมา 
                        เพื่อตรวจสอบปริมาณความชื้นที่มีอยู่ในดินเเละอุณภูมิในอากาศจากนั้นนำข้อมูลปริมาณความชื้นในดินเเละอากาศ
                        เพื่อใช้ในการตัดสินใจประกอบการเลือกปลูกพืชเเละต้นไม้ในเเต่ละช่วงสภาพอากาศที่เหมาะสมกับพื้นที่ 
                        ที่ต้องการเพาะปลูกและเครื่องมือวัดความชื้นในดินและอากาศเป็นอุปกรณ์ที่มีความสำคัญมากในหลายด้าน 
                        เนื่องจากสามารถให้ข้อมูลที่มีประโยชน์ในการจัดการและปรับปรุงสภาพแวดล้อมในการเพาะปลูก การวิจัยด้านสิ่งแวดล้อม 
                        และการอนุรักษ์ทรัพยากรธรรมชาติอย่างมีประสิทธิภาพ 
                        </small>
                    </h3>

                    <div class="im">
                        <img className='' src={img}/>
                    </div>

                    
                
                </div>
                <div class="status">
                        <h1 class="big">สถานะค่าความชื้นในดินที่แสดงบนจอ OLED ในรูปแบบอิโมจิ</h1>
                    </div>
            </div>

            
            <div class="emote mb-5">
                
                        <img className='' src={img1}/>
                        <img className='' src={img2}/>
                        <img className='' src={img3}/>
                        <img className='' src={img4}/>
                        <img className='' src={img5}/>
                    </div>

            <footer>
                <div class="footer">
                    <h1>สามารถติดต่อเพิ่มเติมสอบถามได้ที่ COMPUTER ENGINEERING</h1>
                </div>
            </footer>
        </>
    )
}
export default Home;
