import React from 'react';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import Item from './components/Item';

import {
    addTaskAction,
    deleteTaskAction
} from '../../redux/actions';

function TaskTodo(props) {
    const { toDoList, addTask, deleteTask } = props;

    function handleAddTask(values) {
        addTask(values);
    }

    function handleDeleteTask(index) {
        deleteTask({ index: index })
    }

    function renderToDoList() {
        return toDoList.map((item, index) => {
            // toDoList này là mảng có mỗi phần từ là { title, description } nên item.detail thì nó đâu có
            // Anh hiểu rồi, do lưu trong reducer là { title, detail }
            return (
                <Item
                    key={index}
                    title={item.title}
                    detail={item.detail} // chỗ này item.detail là đúng rồi nhưng e để vào props là description nên qua Item phải là description
                    index={index}
                    deleteTask={handleDeleteTask}
                />
            );
        })
    }

    return (
        <Row>
            <Col span={5}></Col>
            <Col span={14}>
                <h1 style={{ textAlign: 'center' }}>Timestamped Notes App</h1>
                <Card>
                    <Form
                        layout="vertical"
                        name="addTask"
                        initialValues={{ title: '', description: '' }}
                        onFinish={(values) => handleAddTask(values)}
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Note Title" />
                        </Form.Item>

                        <Form.Item
                            label="Detail"
                            name="detail"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input placeholder="Note Details" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Add Note
                            </Button>
                        </Form.Item>
                    </Form>
                    {renderToDoList()}
                </Card>
            </Col>
            <Col span={5}></Col>
        </Row>
    );
}

const mapStateToProps = (state) => {
    const { toDoList } = state.taskReducer;
    return {
        toDoList: toDoList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (params) => dispatch(addTaskAction(params)),
        deleteTask: (params) => dispatch(deleteTaskAction(params)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTodo);