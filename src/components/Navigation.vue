<template>

<nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand" href="#">Viviana's <span>Catering</span></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">The Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  
</template>

<script>
export default {


}
</script>

<style scoped>


.nav-link{
  color: white;
}

.nav-link:hover{
color: rgb(219, 201, 42);;
}

span{
    color: rgb(219, 201, 42);
}

nav{
  background-color: rgb(40, 40, 43);
}

</style>