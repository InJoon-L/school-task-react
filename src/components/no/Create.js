import React from 'react'
import { Button, Form, Input, Row } from 'antd'
let Create = () => {
  return (
    <>
    <Form.Item
      name="title"
      rules={[{ required: true, message: '제목을 입력하세요!' }]}
    >
      <Input placeholder='제목을 입력하세요'/>
    </Form.Item>
    <Form.Item
      name="content"
      rules={[{ required: true, message: '내용을 입력하세요' }]}
    >
      <Input.TextArea 
        rows={15}
        placeholder="내용을 입력하세요"
        size='large'
        showCount
        maxLength={1000}
      />
    </Form.Item>
    <Row align='end'>
      <Form.Item>
        <Button type='primary' size='large' htmlType='submit'>
          글쓰기
        </Button>
      </Form.Item>
    </Row>
    </>
  )
}

export default Create