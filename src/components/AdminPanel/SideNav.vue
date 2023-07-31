<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Feature</div>
          <router-link class="nav-link" to="/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </router-link>
          <router-link class="nav-link" to="/employees">
            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
            Employees
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Chandan
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped></style>
