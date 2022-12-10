<template>
  <div class="sb-nav-fixed">
    <NavBar/>
    <div id="layoutSidenav">
      <SideNav/>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <slot/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/AdminPanel/SideNav.vue";
import NavBar from "@/components/AdminPanel/NavBar.vue";
import Footer from "@/components/AdminPanel/Footer.vue";

export default {
  name: "LayoutContent",
  components: {Footer, NavBar, SideNav},
};
</script>

<style scoped>

</style>