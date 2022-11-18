<template>
  <section class="hero-section">
    <div class="text-center hero-pic">
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="">
            <div class="vivlogo">
              <img
                src="../assets/vivlogo2.png"
                alt="vivlogo"
                width="300"
                height="200"
                class="img-fluid"
              />
            </div>
            <a class="btn btn-outline-light btn-lg mt-4" href="#!" role="button"
              >Request a quote</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="about-container">
      <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
        <Slide v-for="aboutSlide in aboutSlides" :key="aboutSlide.id">
          <div class="carousel__item2">
            <div class="caro mt-5">
              <h3>{{ aboutSlide.header }}</h3>

              <div class="container">
                <p>{{ aboutSlide.content }}</p>
              </div>

              <div class="sliding-icons">
                <img
                  :src="aboutSlide.url"
                  alt=""
                  class="about-photos img-fluid"
                />
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

      <div></div>
      <div class="client-logos">
        <div class="text-center">
          <h4>Our Clients</h4>
        </div>
        <Carousel
          :items-to-show="5"
          :wrap-around="true"
          :autoplay="3000"
          class="logo-container"
        >
          <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item mt-2">
              <img :src="slide.url" alt="" class="imagery" />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>

 <section class="team-sectio container">

    <div class="team-wrapper mt-5">
      <div class="row p-5">
  <div class="col p-2">
    <div class="card centering-items">
       <img
              src="../assets/ceo2.jpg"
              alt="member"
              class="rounded-circle mt-3"
              height="200px"
              width="200px"
            />
      <div class="card-body">
        <h5 class="card-title text-center">VIVIAN - CEO</h5>
        <p class="card-text text-center">
          Some Text will go here about the person</p>
      </div>
    </div>
  </div>
  <div class="col p-2">
    <div class="card centering-items">
       <img
              src="../assets/ceo2.jpg"
              alt="member"
              class="rounded-circle mt-3"
              height="200px"
              width="200px"
            />
      <div class="card-body">
        <h5 class="card-title text-center">ELVINCE - CHEF</h5>
        <p class="card-text text-center">
          Some Text will go here about the person
        </p>
      </div>
    </div>
  </div>
  <div class="col p-2">
    <div class="card centering-items">
       <img
              src="../assets/ceo2.jpg"
              alt="member"
              class="rounded-circle mt-3"
              height="200px"
              width="200px"
            />
      <div class="card-body">
        <h5 class="card-title text-center">SHEILA-CHEF</h5>
        <p class="card-text text-center">
          Some Text will go here about the person
        </p>
      </div>
    </div>
  </div>
  <div class="col p-2">
    <div class="card centering-items">
       <img
              src="../assets/ceo2.jpg"
              alt="member"
              class="rounded-circle mt-3"
              height="200px"
              width="200px"
            />
      <div class="card-body">
        <h5 class="card-title text-center">KENNEDY - CHEF</h5>
        <p class="card-text text-center">
        Some Text will go here about the person
        </p>
      </div>
    </div>
  </div>
  
</div>
    </div>
    
   
  </section>

  
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default {
  name: "Maincontent",
  components: { Carousel, Pagination, Slide, Navigation },

  data() {
    return {
      slides: [
        { id: "1", url: require("@/assets/vivlogo.png") },
        { id: "2", url: require("@/assets/blueridgelogo.png") },
        { id: "3", url: require("@/assets/kpa.png") },
        { id: "4", url: require("@/assets/kuzalogo.png") },
        { id: "5", url: require("@/assets/unga.png") },
      ],
      aboutSlides: [
        {
          id: "2",
          header: "Who we are",
          url: require("@/assets/team.png"),
          content:
            "We are a team of caterers and event planners with years of experience. An embodeiment of quality services offered by industry professionals across the board",
        },
        {
          id: "3",
          header: "Clientele",
          url: require("@/assets/wed.png"),
          content:
            "Trusted by hundreds of clients ranging from weddings, birthdays,corporate forums, school events, funerals among many others.",
        },
        {
          id: "3",
          header: "History",
          url: require("@/assets/timeline.png"),
          content:
            "Vivianas Catering was founded in 1990 by Vivian Sarah with an aim to provide affordable catering services in Kisumu. The company has since then grown and worked with clients all over the country",
        },
        {
          id: "3",
          header: "Why us",
          url: require("@/assets/catering.png"),
          content:
            "We provide the most affordble catering rates. We are willing to go the extra mile to make your event a success.",
        },
      ],
    };
  },
};
</script>


<style scoped>
.mask {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero-pic {
  background-image: url("../assets/platter.jpg");

  background-size: cover;
}

.about-section {
  background-color: white;
}

.carousel__item {
  width: 100%;
  justify-content: center;
  align-items: center;
}

.imagery {
  height: auto;
  width: 70px;
}

.carousel__item2 {
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.client-logos {
  margin-top: 2%;
}

.about-photos {
  max-width: 250px;
  height: 250px;
}


.centering-items{
  display: flex;
  justify-content: center;
  align-items: center;
}


.card {
  background-color: rgb(219, 201, 42);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.1);
}
.back {
  background-image: url("../assets/platter.jpg");
  height: 100vh;


}

.form-wrapper{
  width: 50%;
}




.borders {
  border: 2px solid red;
}
</style>