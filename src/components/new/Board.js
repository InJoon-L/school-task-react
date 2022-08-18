import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Tr from './Tr'
import Post from './Post'
import Modal from './Modal'
import { Link } from 'react-router-dom'

const Board = () => {
  let [Info, setInfo] = useState([]);
  let [Selected, setSelected] = useState('');
  let [ModalOn, setModalOn] = useState(false);

  const nextId = useRef(11);
  
  useEffect(() => {
    axios.get('http://localhost:3001/user')
    .then(res => {
        setInfo(res.data);
        console.log(res.data);
    }).catch(err => {
        console.error(err);
    })
  }, [])
  
  const handleSave = (data) => {
    if (data.id) {
        setInfo(
            Info.map(row => data.id === row.id ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
            } : row)
        );
    } else {
        setInfo(Info => Info.concat({
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website
        }));
        nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(Info => Info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
        id: item.id,
        name: item.name,
        email: item.email,
        phone: item.phone,
        website: item.website
    };
    console.log(selectedData);
    setSelected(selectedData);
  }

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
    <div className='container max-w-screen-lg mx-auto'>
      <div className='text-xl font-bold mt-5 mb-3 text-center'>고객 정보 리스트</div>
      <Link to='/about'>
        <div className='text-xl font-bold mt-5 mb-3 text-center'>About</div>
      </Link>
      <table className='min-w-full table-auto text-gray-800'>
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className='text-gray-300 px-4 py-3'>Id.</th>
            <th className='text-gray-300 px-4 py-3'>Name</th>
            <th className='text-gray-300 px-4 py-3'>Email</th>
            <th className='text-gray-300 px-4 py-3'>Phone No.</th>
            <th className='text-gray-300 px-4 py-3'>Website</th>
            <th className='text-gray-300 px-4 py-3'>Edit</th>
            <th className='text-gray-300 px-4 py-3'>Delete</th>
          </tr>
        </thead>
        <Tr info={Info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <Post onSaveData={handleSave} />
      {ModalOn && <Modal 
        selectedData={Selected} handleCancel={handleCancel}
      handleEditSubmit={handleEditSubmit} />}
    </div>
  );
}

export default Board