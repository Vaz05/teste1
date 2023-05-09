import React, { Component } from 'react';
import { Button, Input, Form } from 'antd';

class MyForm extends Component {
  formRef = React.createRef();

  initialState = {
    name: '',
    job: '',
  };

  submitForm = (values) => {
    this.props.handleSubmit(values);
    this.formRef.current.resetFields();
  };

  render() {
    return (
      <Form ref={this.formRef} onFinish={this.submitForm}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="job" label="Job" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default MyForm;
