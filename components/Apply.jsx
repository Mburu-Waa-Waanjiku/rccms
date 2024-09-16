'use state'

import React, { useState } from 'react'
import {
  Button,
  Input,
  Form,
} from 'antd/lib';
import { DatePicker, Space } from 'antd';
import { IoClose } from "react-icons/io5";
import { VscLoading } from "react-icons/vsc";

function Apply({applyTitle, closeLogger}) {

  const [date, setDate] = useState('');
  const [waiting, setWaiting] = useState(false);
  
  const onChange = (date, dateString) => {
    setDate(dateString)
    console.log(date, dateString);
  };

  const RegistersubmitHandler = async (values) => {
    setWaiting(true);
    try {
      console.log(values)
    } catch (err) {
      console.log(err)
    }
  };
  
  return (
    <div className='w-full left-0 fixed h-screen px-6 top-0 z-20 flex justify-center items-center'>
      <Form className='w-full flex flex-col border-white border-2 justify-between min-w-64 max-w-xl min-h-96 py-6 px-8 rounded-3xl title-color' onFinish={RegistersubmitHandler}>
        <IoClose onClick={closeLogger} style={{transform: 'translateY(-20px)'}} className='text-white z-10 text-xl absolute my-4'/>
        <div className='text-2xl font-medium text-center py-3 pb-8 text-white'>
          {applyTitle}
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex xsm:gap-3 flex-col xsm:flex-row'>
            <Form.Item
              name="firstName"
              defaultValue=""
              rules={[{
                required: true,
                minLength: 2,
              }]}
            >
              <Input placeholder='First Name'/>
            </Form.Item>
            <Form.Item
              name="secondName"
              defaultValue=""
              rules={[{
                required: true,
                minLength: 2,
              }]}
            >
              <Input placeholder='Second Name'/>
            </Form.Item>
          </div>
          <div className='flex  xsm:gap-3 flex-col xsm:flex-row'>
            <Form.Item
              name="email"
              defaultValue=""
              rules={[{
                required: true,
                minLength: 2,
              }]}
            >
              <Input placeholder='Email'/>
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              defaultValue=""
              rules={[{
                required: true,
                minLength: 2,
              }]}
            >
              <Input placeholder='Phone Number'/>
            </Form.Item>
          </div>
          <div className='flex min-w-44 xsm:min-w-52 xsm:gap-3 flex-col xsm:flex-row'>
            <Form.Item className='xsm:w-full'>
              <DatePicker className='w-full' placeholder='Date of admission' onChange={onChange} />
            </Form.Item>
          </div>
        </div>
        <div className='flex flex-col items-center justify-items-center'>
          <Form.Item>
            <Button style={{backgroundColor:'rgb(51, 51, 51)'}} className=' flex h-10 pb-2 w-32 rounded-full title-gradien justify-center' htmlType="submit" >
              {!waiting ? (
                <div className='font-medium text-lg text-white'> Apply </div>
                ) :
                (<VscLoading className='text-white animate-spin'/>)
              }
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default Apply