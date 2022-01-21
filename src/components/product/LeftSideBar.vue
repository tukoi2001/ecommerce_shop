<template>
  <div>
    <div class="widget-list mb-10">
      <h3 class="widget-title mb-6">Search</h3>
      <div class="search-box my-5">
        <input
          type="text"
          class="form-control"
          placeholder="Search Our Store"
          aria-label="Search Our Store"
        />
        <button class="btn btn-primary btn-hover-secondary" type="button">
          <b-icon class="widget-icon" icon="search"></b-icon>
        </button>
      </div>
    </div>
    <div class="widget-list mb-10">
      <h3 class="widget-title mb-6">Categories</h3>
      <div class="sidebar-body mb-5 mt-3">
        <ul class="sidebar-list">
          <li><a href="#">All Product</a></li>
          <li><a href="#">Best Seller (5)</a></li>
          <li><a href="#">Featured (4)</a></li>
          <li><a href="#">New Products (6)</a></li>
        </ul>
      </div>
    </div>
    <div class="widget-list mb-10">
      <h3 class="widget-title mb-6">Tags</h3>
      <div class="sidebar-body">
        <ul class="tags mb-n2">
          <li><a href="#">Babys Toy</a></li>
          <li><a href="#">Toy Factory</a></li>
          <li><a href="#">Toy Fashion</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">Handmade</a></li>
          <li><a href="#">Lather</a></li>
          <li><a href="#">Fabrics</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
};
</script>

<style scoped src="@/assets/css/components/product/LeftSideBar.css"></style>
