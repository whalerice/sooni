import { apis } from '@/lib/apis';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';

export async function fetchData(page?: number) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const res = await apis.movie.popular({ page: page ? page : 1 });
    let list = res.results;
    let total = res.total_results;
    return {
      list,
      total,
    };
  } catch (error) {
    throw error;
  }
}

export default async function MovieList() {
  const { list } = await fetchData();
  const url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  return (
    <>
      <Row gutter={[16, 16]}>
        {list.map((movie: any) => {
          return (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={6} xxl={4}>
              <Card cover={<img src={url + movie.poster_path} />}>
                <Meta title={movie.title} description={movie.release_date} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <br />
    </>
  );
}
