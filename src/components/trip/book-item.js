import React from "react"
import styles from "./trip.module.scss"
import { AlarmClock } from "../../assets/svg"
import { Button } from "../common"
import moment from "moment"

const BookItem = ({
  booking: {
    bookingId,
    departureTerminal,
    arrivalTerminal,
    vehicle,
    amount,
    seats,
    departureTime,
  },
  viewDetails,
}) => {
  return (
    <div className={styles.BookItem}>
      <div className={styles.BookItem__Details}>
        <div className={styles.BookItem__Details__bus}>
          <p>{vehicle}</p>
          <h3>
            {departureTerminal} to {arrivalTerminal}
          </h3>
          <div className={styles.BookItem__Details__time}>
            <AlarmClock />
            <p>{moment(departureTime).format("H:mm A")}</p>
          </div>
        </div>

        <div className={styles.BookItem__Details__booking}>
          <h3>NGN {amount}</h3>
          <p>{seats} seat(s)</p>
          <Button
            onClick={() => viewDetails(bookingId)}
            className={styles.BookItem__button}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BookItem
