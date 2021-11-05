import React,{useState} from 'react'
import './../../../styles/Banner.css'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'

function Banner() {
    const history =useHistory();
    // const [showSearch,setShowSearch]=useState(false);
    return (
        <div className="banner">
            
            {/* <div className="banner__search">
                {showSearch && <h1>Search</h1>}

                <Button onClick={()=> setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{showSearch ? "Hide" : "Search Date"}</Button>
            </div> */}

            <div className="banner__info">
                <span>Bạn chưa biết nên đi đâu? Tuyệt!</span><br />
                
                <Button className="btn__banner" onClick={() => history.push('/search')} variant="outlined">Tìm kiếm linh hoạt</Button>
            </div>
        </div>
    )
}

export default Banner
