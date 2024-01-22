'use client';

import { Input, Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;

export default function Page() {
  return (
    <>
      <Title>대시보드</Title>
      <Input placeholder="test" />
      <p>test</p>
      <Text>Ant Design (default)</Text>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam
        iste, rem aut dicta a eveniet fugit, quaerat itaque beatae quidem, quo
        numquam consequuntur tenetur vel deserunt ipsam nulla ut!
      </Paragraph>
    </>
  );
}
