import React from "react";

const Recorded = ({ records , deleteFunction}) => (
    <>
        <section className='displayed-feelings'>
            {records.map((r,idx) => (
                <div key={idx}>
                    <img src={r.emoji} alt='' />
                    <p>{r.text}</p>
                    <button className="btn" onClick={(e)=> deleteFunction(e,idx)}>Delete</button>
                </div>
            ))
            }
        </section>
    </>
)
export default Recorded;