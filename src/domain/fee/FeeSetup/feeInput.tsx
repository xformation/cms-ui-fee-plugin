import * as React from "react";

const FeeInputs = (props: any) => {
  return (
    props.fees.map((val: any, idx: any) => {
      let feeId = `form-${idx}`, ageId = `age-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={feeId}>{`Cat #${idx + 1}`}</label>
          <input
            type="text"
            name={feeId}
            data-id={idx}
            id={feeId}
            value={props.fees[idx].name}
            className="name"
          />
          <label htmlFor={ageId}>Age</label>
          <input
            type="text"
            name={ageId}
            data-id={idx}
            id={ageId}
            value={props.fees[idx].age}
            className="age"
          />
        </div>
      )
    })
  )
}
export default FeeInputs;