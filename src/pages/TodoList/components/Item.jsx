import { useState } from 'react';
import { Row, Col, Space, Card, Button } from 'antd';
import history from '../../../utils/history';

function Item(props) {
    const { title, detail, index, deleteTask } = props;

    const [isShowDetail, setIsShowDetail] = useState(false);
    function renderItemView() {
        return (
            <Row>
                <Col span={8}>Title AAA:</Col>
                <Col span={16}>{title}</Col>
                {isShowDetail && (
                    <>
                        <Col span={8}>Detail:</Col>
                        <Col span={16}>{detail}</Col>
                    </>
                )}
            </Row>
        )
    }



    return (
        <Card size="small" style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <Button type="primary" onClick={() => history.push(`/task/${index}`)}>
                    Detail
                </Button>
                <Space>
                    <>
                        <Button
                            type="primary"
                            ghost
                            onClick={() => setIsShowDetail(!isShowDetail)}
                        >
                            {isShowDetail ? 'Hide' : 'Show'}
                        </Button>

                        <Button type="danger" onClick={() => deleteTask(index)}>Delete</Button>
                    </>
                </Space>
            </div>

            {renderItemView()}
        </Card>
    );
}

export default Item;
