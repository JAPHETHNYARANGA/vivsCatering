<template>
  <footer>
    <div class="bg-light pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="widget-title">
              <h3 class="mb-4   text-secondary text-uppercase">
                Call Us Today
              </h3>
            </div>
            <h4 class="text-success">+254-726-250-134</h4>
            <p class="text-secondary m-0 mt-3">
              Mon. - Fri. <b>8:00 AM - 7:00 PM</b>
            </p>
            <p class="text-secondary">Sat. - Sun. <b>Flexible Hours</b></p>
          </div>
          <div class="col-sm-6 col-md-6">
            <form action="mail.php" method="post">
              <div class="card rounded-0">
                <div class="card-header p-0">
                  <div class="text-white text-center py-2 quote-header">
                    <h3>Request Quote</h3>
                  </div>
                </div>
                <div class="card-body p-3">
                  <!--Body-->
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control"
                        id="names"
                        name="names"
                        placeholder="Enter Full Names"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter Email Address"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group mb-2">
                      <textarea
                        class="form-control"
                        placeholder="Briefly describe what you need "
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-sm-6 col-md-3">
            <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.15986362836!2d34.59807888807205!3d-0.07394211911515454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa496ab60aebd%3A0x71c2d31867dd2a11!2sKisumu%20City%20Business%20Park!5e0!3m2!1sen!2ske!4v1669022480458!5m2!1sen!2ske" style="border:0;" allowfullscreen="" loading="lazy" height="250px" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          
        </div>
      </div>
      <div class="col-12">
        <p class="text-center text-white py-1 mt-5 bottom-content">
          © Copyright 2022 . All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>

ul {
  margin: 0px;
  padding: 0px;
}
ul li {
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: #333333;
  font-size: 16px;
  margin: 8px 0px;
  display: block;
}

.quote-header{
  background-color: rgb(40, 40, 43);;
}

.bottom-content{
  background-color:rgb(40, 40, 43);
}

.borders {
  border: 2px solid red;
}
</style>