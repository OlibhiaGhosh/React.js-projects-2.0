import { useState } from "react"

const Basiccomponent = (label, fromamount, fromcurrency, tocurrency) => {
    return(
        <>
          <div className="flex gap-x-5">
            <div className="flex flex-col gap-y-3">
                <label htmlFor="fromamount">{label}</label>
                <input type="number" id="fromamount" name="fromamount" onChange={} />
            </div>
            <div className="flex flex-col gap-y-3">
                <label htmlFor="fromcurrency">Select currency</label>
                <select name="fromcurrency" id="fromcurrency">
                    <option value="USD">USD</option>
                </select>
            </div>
          </div>
        </>
    )
}

export default Basiccomponent;