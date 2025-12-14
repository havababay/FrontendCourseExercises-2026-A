import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  let year = currentYear - 1;
  const getYear = function() {
    if (year === currentYear) {
      return year;
    } else {
      year++;
      return year;
    }
  }

  return (
    <div>Footer {getYear()}</div>
  )
}
