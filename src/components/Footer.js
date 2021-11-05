import React from 'react'
import '../styles/Footer.css'
import LanguageIcon from '@material-ui/icons/Language';
import  FacebookIcon  from '@material-ui/icons/Facebook';
import  InstagramIcon   from '@material-ui/icons/Instagram';
import  TwitterIcon    from '@material-ui/icons/Twitter';



function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="top row">
                    <div className="col-3 flex-column">
                        
                            <h5>Giới thiệu</h5>
                        
                        <ul>
                            <li class="_wmuyow">
                                <a href="/d/howairbnbworks" class="_o06542u">Phương thức hoạt động của Airbnb</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/press/news" class="_o06542u">Trang tin tức</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/2021" class="_o06542u">Airbnb 2021</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="https://investors.airbnb.com" class="_o06542u">Nhà đầu tư</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/plus" class="_o06542u">Airbnb Plus</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/luxury" class="_o06542u">Airbnb Luxe</a>
                            </li>
                            <li class="_wmuyow">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.hoteltonight.com/?utm_source_name=Airbnb&amp;utm_campaign_name=Dr_Us_Desktop_Airbnb_Footer" class="_o06542u">HotelTonight</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/work?s=footer" class="_o06542u">Airbnb for Work</a>
                            </li>
                            <li class="_wmuyow">
                                <a rel="noopener noreferrer" target="_blank" href="https://m.youtube.com/airbnb" class="_o06542u">Nhờ có Host, mọi điều đều có thể</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/careers" class="_o06542u">Cơ hội nghề nghiệp</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="https://news.airbnb.com/what-makes-airbnb-airbnb" class="_o06542u">Thư của nhà sáng lập</a>
                            </li>

                        </ul>
                    </div>

                    <div className="col-3">
                        
                            <h5>Cộng Đồng</h5>
                        
                        <ul>
                            <li class="_wmuyow">
                                <a href="/diversity" class="_o06542u">Sự đa dạng và Cảm giác thân thuộc</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/accessibility" class="_o06542u">Tiện nghi phù hợp với người có nhu cầu đặc biệt</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/associates?from=footer" class="_o06542u">Đối tác liên kết Airbnb</a>
                            </li>
                            <li class="_wmuyow">
                                <a rel="noopener noreferrer" target="_blank" href="https://www.airbnb.org/refugees" class="_o06542u">Đón tiếp người tị nạn Afghanistan</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/invite?r=6" class="_o06542u">Lượt giới thiệu của khách</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="https://www.airbnb.org?locale=vi" class="_o06542u">Airbnb.org</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        
                            <h5>Đón tiếp khách</h5>
                        
                        <ul>
                            <li class="_wmuyow">
                                <a href="/host/homes?from_footer=1" class="_o06542u">Cho thuê nhà</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/d/onlinehost" class="_o06542u">Tổ chức Trải nghiệm trực tuyến</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/host/experiences" class="_o06542u">Tổ chức trải nghiệm</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/help/responsible-hosting" class="_o06542u">Đón tiếp khách có trách nhiệm</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/resources" class="_o06542u">Trung tâm tài nguyên</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/help/community?s=footer" class="_o06542u">Trung tâm cộng đồng</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        
                            <h5>Hỗ Trợ</h5>
                        
                        <ul>
                            <li class="_wmuyow">
                                <a href="/d/covidsafety" class="_o06542u">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/help/home?from=footer" class="_o06542u">Trung tâm trợ giúp</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19" class="_o06542u">Các tùy chọn hủy</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/neighbors" class="_o06542u">Hỗ trợ khu dân cư</a>
                            </li>
                            <li class="_wmuyow">
                                <a href="/trust" class="_o06542u">Tin cậy và an toàn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bottom row">
                    <div className="d-flex left col-5">
                        <div>
                            © 2021 Airbnb, Inc.
                        </div>
                        <div>
                            <ul className="d-flex">
                                <li>
                                    <span>.</span>
                                    <a href="/terms/privacy_policy" class="_o06542u">Quyền riêng tư</a>
                                </li>
                                <li>
                                    <span>.</span>
                                    <a href="/terms" class="_o06542u">Điều khoản</a>
                                </li>
                                <li>
                                    <span>.</span>
                                    <a href="/sitemaps/v2" class="_o06542u">Sơ đồ trang web</a>
                                </li>
                            </ul> 
                        </div>
                    </div>
                    <div className="center col-2"></div>

                    <div className='right col-5'>
                        <div className="d-flex">
                            <div>
                                <LanguageIcon/>
                                <button>
                                    <span>Tiếng Việt(VN)</span>
                                </button>
                                <button>
                                    <span>$</span>
                                    <span>USD</span>
                                </button>
                            </div>
                            <div className="social">
                                <a href="https://www.facebook.com/airbnb" >
                                    <FacebookIcon/>
                                </a>
                                <a href="https://twitter.com/airbnb">
                                    <TwitterIcon />
                                </a>
                                <a href="https://instagram.com/airbnb">
                                    <InstagramIcon />
                                </a>
                            </div>
                        
                        </div>

                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
