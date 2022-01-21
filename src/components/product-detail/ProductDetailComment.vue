<template>
  <div class="product_tab_content border p-3">
    <div class="single-review d-flex mb-4 col-12">
      <div class="review_thumb">
        <img alt="review images" :src="img"/>
      </div>
      <div class="review_details">
        <div class="review_info mb-2">
          <div class="review-title-date d-flex align-items-center">
            <h5 class="title">Admin -</h5>
            <span> January 19, 2021</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          viverra ex, vitae vestibulum arcu. Duis sollicitudin metus sed lorem
          commodo, eu dapibus libero interdum. Morbi convallis viverra erat, et
          aliquet orci congue vel. Integer in odio enim. Pellentesque in
          dignissim leo. Vivamus varius ex sit amet quam tincidunt iaculis.
        </p>
      </div>
    </div>
    <div class="rating_wrap">
      <h5 class="rating-title mb-2">Bình Luận</h5>
    </div>
    <div class="comments-area comments-reply-area">
      <div class="row">
        <div class="col-lg-12 col-custom">
          <form action="#" class="comment-form-area">
            <div class="comment-form-comment mb-3">
              <label>Comment</label>
              <textarea class="comment-notes" required="required"></textarea>
            </div>
            <div class="comment-form-submit">
              <button class="btn btn-dark btn-hover-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailComment",
  data() {
      return {
          img: require("@/assets/images/testimonials/admin.jpg")
      }
  }
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailComment.css">
</style>