import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);

  return (
    <>
      <div>Details</div>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
