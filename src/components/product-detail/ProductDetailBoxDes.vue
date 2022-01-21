<template>
  <div class="col-12">
    <div class="product__des">
      <p>{{ description }}</p>
    </div>
    <div class="product__brand">
      <p>
        Thương hiệu: <span>{{ customFieldsBox.brand }}</span>
      </p>
    </div>
    <div class="product__material">
      <p>
        Chất liệu: <span>{{ customFieldsBox.merital }}</span>
      </p>
    </div>
    <div class="product__age">
      <p>
        Độ tuổi sử dụng: <span>{{ customFieldsBox.age }}</span>
      </p>
    </div>
    <div class="product__age">
      <p>
        Tất cả sản phẩm được Toyqo nhập khẩu chính hãng. Khách hàng yên tâm giao
        trọn niềm tin vào chúng tôi!
      </p>
      <p class="desc-content my-4 text-center">
        <strong>Toyqo trân trọng cảm ơn!</strong> <br />
        --------------------------------------------------------------------
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailBoxDes",
  props: {
    customFieldsBox: {
      type: Object,
      default: () => {},
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailBoxDes.css">
</style>