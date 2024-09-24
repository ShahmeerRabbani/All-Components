import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../Config/FirebaseConfig'

const RoomBooked = () => {

  const [roomData, setRoomData] = useState([])

  useEffect(()=>{
    getDataForRoom()
  }, [])

  const getDataForRoom =async ( ) => {
    const getData = await getDocs(collection(db, 'UserInformation'))
    let arr=[]
    getData.forEach((doc) => {
      arr.push({...doc.data(), id:doc.id})
      setRoomData(arr)
    })
  }

  return (
    <div className='Content'>
      <div className='Regis_Form'>
        <h1>Room Booked</h1>
        {roomData?.map((e, i)=>{
          return(
            <div key={i} className='room'>
              <h3>Room Number: {e.room}</h3>
              <p><b>Name:</b> {e.firstName} {e.lastName}</p>
              <p><b>Email:</b> {e.email}</p>
              <p><b>Gender:</b> {e.radio}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RoomBooked
