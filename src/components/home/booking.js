import React from 'react'
import style from "./home.module.scss"
function Booking () {
    return (
        <div className={style.book}>
            <form className={style.bookall}>
                <div className={style.row}>
                <div className={style.col}>
                <label>Where are you going?</label><br></br>
                <input type="text" name="name" placeholder="Location"></input>
                </div>
                <div className={style.col}>
                <label>Check-in-date</label><br></br>
                <input type="text" name="name" placeholder="Location"></input>
                </div>
                <div className={style.col}>
                <label>Check-out-date</label><br></br>
                <input type="text" name="name" placeholder="Location"></input>
                </div>
                <div className={style.col}>
                <label>Number of Guests</label><br></br>
                <input type="text" name="name" placeholder="Location"></input>
                </div>
                <button className={style.button}>
                <a href=""  type="submit">Submit</a>
                </button>

                </div>

            </form>

        </div>
    )
}
export default Booking;