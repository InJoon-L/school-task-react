import React from 'react'

const Modal = () => {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <div>
        <p>상세내용</p>
        <button className='button'>수정</button>
        <button className='button'>삭제</button>
      </div>
    </div>
  )
}

export default Modal