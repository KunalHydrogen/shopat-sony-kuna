import React from 'react'

export default function Pincode({
    size = 25, // or any default size of your choice
    color = "black" // or any color of your choice
  }) {
    return (
        <div className="PincodeElement">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size} // added size here
        height={size} // added size here
        fill={color} // added color here
      >
        <path class="a" d="M9.113,0A6.143,6.143,0,0,0,3,6.158c0,4.825,5.539,9.807,5.774,10.016a.511.511,0,0,0,.678,0c.236-.21,5.774-5.192,5.774-10.017A6.143,6.143,0,0,0,9.113,0Zm0,9.51a3.4,3.4,0,1,1,3.4-3.4A3.4,3.4,0,0,1,9.113,9.51Z" transform="translate(-3)"></path>
      </svg>
      <p>Deliver to <input /></p>
      </div>
    )
  }