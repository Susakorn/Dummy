import {Link} from 'react-router-dom'
import imgs from './dummy2.png'
function Page2() {
    return (
        <>
            <nav>
                <div className="nav-bar">
                    <div class="logo">
                        <Link to = '/'><img className="" src={imgs}/></Link>
                    </div>
                    <ul className="menu">
                        <li className="nav-link"><Link to='/'>กลับสู่หน้าหลัก <i className="fa-solid fa-angles-right"></i></Link></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div class="picture text-center mt-5 mb-5">
                    <iframe 
                        width="1000" height="750" 
                        src="https://www.youtube.com/embed/43CMq6DlDl8?si=zh0DNG_gpnLCxMrd"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>

                     </iframe>
                </div>
            </main>

            <footer>
                <div className="footer">
                    <div className="text">
                        <h1>สามารถติดต่อเพิ่มเติมสอบถามได้ที่ COMPUTER ENGINEERING</h1>
                    </div>
                </div>
            </footer>
        </>

    )
}
export default Page2;


