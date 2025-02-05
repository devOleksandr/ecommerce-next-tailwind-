import {ProductsPage} from "@/modules/Products";
import {Layout} from "@/modules/Layout";
import {GuaranteeInfo} from "@/components/UI/GuaranteeInfo";

export default function Shop() {
  return (
    <Layout>
      <ProductsPage/>
       <GuaranteeInfo/>
    </Layout>
  );
}
