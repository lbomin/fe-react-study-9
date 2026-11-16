import { product1, product2, product3, price1, price2, price3 } from "./productData";
import pddp from "./productData";
import { shopAddress, shopName, shopPhone } from "./Quiz00/shopData";

const Pdi = ()=>{
    return(
    <div>
        <p>온라인 쇼핑몰</p>
        <br></br>
        <p>쇼핑몰명 : {shopName}</p>
        <p>주소 : {shopAddress}</p>
        <p>전화번호 : {shopPhone}</p>
        <br></br>
        <p>상품 목록</p>
        <br></br>
        <p>상품1 : {product1}</p>
        <p>가격 : {price1}원</p>
        <br></br>
        <p>상품2 : {product2}</p>
        <p>가격 : {price2}원</p>
        <br></br>
        <p>상품3 : {product3}</p>
        <p>가격 : {price3}원</p>
        <br></br>
        <p>------------------------</p>
        <p>총 상품 금액 : {pddp}원</p>
    </div>
)};

export default Pdi;