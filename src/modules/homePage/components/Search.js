import React from 'react'
import './../../../styles/Search.css'
import SearchIcon from '@material-ui/icons/Search'

function Search() {
    return (
        <div className="search">
            <div className="search_block">
                <div className="search_container">
                    <label for="location">Địa điểm</label>
                    <input type="text" className="search_input" placeholder="Bạn sắp đi đâu?"/>
                </div>
            </div>
            <div className="search_block">
                <div className="search_container">
                    <p className="search_title">Nhận phòng</p>
                    <p className="search_text">Thêm ngày</p>
                </div>
            </div>
            <div className="search_block">
                <div className="search_container">
                    <p className="search_title">Trả phòng</p>
                    <p className="search_text">Thêm ngày</p>
                </div>
            </div>
            <div className="search_block last">
                <div className="search_container">
                    <p className="search_title">Khách</p>
                    <p className="search_text">Thêm khách</p>
                </div>
                
            </div>
            <div className="search_button">
                    <SearchIcon className="search__icon"/>
            </div>              
        </div>
    )
}

export default Search
