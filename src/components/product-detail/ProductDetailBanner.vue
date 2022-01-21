<template>
  <div class="row product__detail-banner">
    <div class="col-md-4">
      <article class="card card-body">
        <figure class="itemside">
          <div class="aside">
            <div class="box-icon rounded-circle bg-primary">
              <b-icon class="icon__aside" icon="cash"></b-icon>
            </div>
          </div>
          <figcaption class="info">
            <h5 class="title">Giá cả hợp lý</h5>
            <p>Sản phẩm của chúng tôi có giá cả hợp lý và chính hãng.</p>
          </figcaption>
        </figure>
      </article>
    </div>
    <div class="col-md-4">
      <article class="card card-body">
        <figure class="itemside">
          <div class="aside">
            <div class="box-icon rounded-circle bg-secondary">
              <b-icon class="icon__aside" icon="chat-dots-fill"></b-icon>
            </div>
          </div>
          <figcaption class="info">
            <h5 class="title">Hỗ trợ khách hàng 24/7</h5>
            <p>Hệ thống hỗ trợ khách hàng 24/7 mọi lúc mọi nơi.</p>
          </figcaption>
        </figure>
      </article>
    </div>
    <div class="col-md-4">
      <article class="card card-body">
        <figure class="itemside">
          <div class="aside">
            <div class="box-icon rounded-circle bg-success">
                <b-icon class="icon__aside" icon="truck"></b-icon>
            </div>
          </div>
          <figcaption class="info">
            <h5 class="title">Giao hàng nhanh</h5>
            <p>Giao hàng nhanh chóng, an toàn và tiện lợi cho khách hàng.</p>
          </figcaption>
        </figure>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailBanner",
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailBanner.css">
</style>