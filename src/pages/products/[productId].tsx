import { useRouter } from 'next/router';

function Product({ product }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {product?.id ?? 'N/A'} {product?.title ?? 'N/A'}
      </h2>
      <p>{product?.description ?? 'N/A'}</p>
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  const paths = data.map((product: any) => {
    return {
      params: {
        productId: `${product.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}
