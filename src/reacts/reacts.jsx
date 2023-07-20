import React, { useState } from 'react'
import '../emotions/emotions'
import './reacts.css'
import MSPLogo from '../images/MSPLogo.svg'
import Emoji1 from '../images/Emoji1.png'
import Emoji2 from '../images/Emoji2.png'
import Emoji3 from '../images/Emoji3.png'
import Emoji4 from '../images/Emoji4.png'
import MainImage from '../images/mainImage.png'
import Emotions from '../emotions/emotions'
import Recorded from '../recorded/recorded'
function Reacts() {
    let images = [Emoji1, Emoji2, Emoji3, Emoji4];
    let [records, setRecords] = useState([]);
    let deleteHandler = (e, deleteIndex) => {
        setRecords(records.filter((obj, idx) => deleteIndex != idx))
    }
    const recordFeeling = () => {
        const feeling = document.getElementById("text");
        const emoji = (document.querySelector("input[type='radio']:checked"));
        if (feeling.value && emoji) {
            setRecords([...records, { text: feeling.value, emoji: images[emoji.value] }])
            records.push({ text: feeling, emoji: images[emoji.value] });
            feeling.value = "";
            emoji.checked = false;
        } else {
            alert("please fill all fields");
        }
        console.log(records);
    }
    return (
        <>
            <main className='main'>
                <div className='heading'>
                    <img src={MSPLogo} alt=''></img>
                    <p>Recording Feelings</p>
                </div>
                <div className='record-display'>
                    <div className='record-feeling'>
                        <input type="text" placeholder='Write your feeling here...' id='text' />
                        <p>Select Emoji</p>
                        <div className='select-emoji'>
                            <Emotions images={images} />
                            <button type='submit' onClick={recordFeeling} className='btn'>Record</button>
                        </div>
                    </div>
                    <Recorded records={records} deleteFunction={deleteHandler} />

                </div>
                <img src={MainImage} alt='' className='main-img'></img>
            </main>
        </>
    );
}
export default Reacts;