'use client';

import { Card, Col, Row, Skeleton } from 'antd';

export function CardSkeleton() {
  return (
    <Card cover={<Skeleton.Image active />}>
      <Skeleton active />
    </Card>
  );
}

export function TicketListSkeleton() {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < 19; i++) {
      const key = i;
      result.push(key);
    }
    return result;
  };
  return (
    <Row gutter={[16, 16]}>
      {rendering().map((key) => {
        return (
          <Col key={key} xs={24} sm={12} md={8} lg={6} xxl={4}>
            <CardSkeleton />
          </Col>
        );
      })}
    </Row>
  );
}
