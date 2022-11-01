import React from 'react'

const Card = ({item}) => {
    console.log(item);
  return (
 
           <div key={item.id}>
                <div className="cards">
                    <img src={item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <p className="amount">&#8378;{item.saleInfo.listPrice && item.saleInfo.listPrice.amount}</p>
                    </div>
                </div>
                {/* <Modal book={book} show={show} onClose={()=>setShow(false)}/> */}
                </div>
 
 
 
 
 
 
 
  )
}

export default Card