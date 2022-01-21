<template>
  <div class="wrapper">
    <div class="blog">
      <div class="container">
        <router-link to="/" class="blog__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="blog__title">Blog</span>
      </div>
    </div>
     <div class="container">
       <div class="row">
         <div class="col-md-4" v-for="(item, index) in blogs" :key="index">
           <blog-item
            :img="item.img"
            :title="item.title"
           />
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import BlogItem from '../components/blog/BlogItem.vue'
export default {
  components: { BlogItem },
  name: 'Blog',
  data() {
    return {
      blogs: [
        {
          img: require('@/assets/images/blog/1.jpg'),
          title: 'It is a long established fact that a reader will be distracted',
        },
        {
          img: require('@/assets/images/blog/2.jpg'),
          title: 'There are many variations of passages of lorem ipsum',
        },
        {
          img: require('@/assets/images/blog/3.jpg'),
          title: 'The standard chunk of lorem ipsum used since',
        },
        {
          img: require('@/assets/images/blog/4.jpg'),
          title: 'It is a long established fact that a reader will be distracted',
        },
        {
          img: require('@/assets/images/blog/5.jpg'),
          title: 'It is a long established fact that a reader will be distracted',
        },
        {
          img: require('@/assets/images/blog/6.jpg'),
          title: 'It is a long established fact that a reader will be distracted',
        },
      ]
    }
  }
}
</script>

<style scoped src="@/assets/css/Blog.css">

</style>