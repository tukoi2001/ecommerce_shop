<template>
  <div class="single-blog my-5 pt-3">   
    <div class="blog-thumb">
      <a href="">
        <img
          class="fit-image"
          :src="img"
          alt="Blog Image"
        />
      </a>
    </div>
    <div class="blog-content">
      <div class="blog-meta">
        <p>03/11/2021 | <span>Admin</span></p>
      </div>
      <h5 class="blog-title">
        <a href=""
          >{{ title }}</a
        >
      </h5>
      <a href="" class="link mt-3"><span>Read More</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/blog/BlogItem.css"></style>
