<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew alpha-4">
                <vue-particles
                       color="#dedede"
                       :particleOpacity="0.3"
                       :particlesNumber="20"
                       shapeType="polygon"
                       :particleSize="40"
                       :lineLinked="false"
                       :moveSpeed="2"
                       :hoverEffect="true"
                       hoverMode="grab"
                       :clickEffect="true"
                       clickMode="push"
                     >
                     </vue-particles>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
        </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--350" no-body>
                    <div class="px-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/anand.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">

                                    <!-- <base-dropdown> -->
                                        <base-button slot="title" type="warning" class="mr-3 dropdown-toggle"
                                        onClick="alert('Anand will enable this soon. Please visit later')">
                                          About
                                        </base-button>

                                        <!-- <router-link to="/projects" class="dropdown-item">Projects</router-link>
                                        <router-link to="/blog" class="dropdown-item">Blogs</router-link>
                                        <router-link to="/mentor" class="dropdown-item">Mentorship</router-link>
                                        <router-link to="/profile" class="dropdown-item">Certificates</router-link>
                                        <div class="dropdown-divider"></div>
                                        <router-link to="/resume" class="dropdown-item">Resume</router-link>

                                    </base-dropdown> -->
                                    <a href="mailto:saianand0427@gmail.com"  target="_blank"><base-button type="secondary" textColor = "warning" class="float-right">Message</base-button></a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="container d-flex justify-content-center">
                                    <div class="row align-items-center my-md">
                                        <div class="mt--5 text-lg-center btn-wrapper">
                                            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/anand0427"
                                               class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                                               data-original-title="Star on Github">
                                               <i class="fa fa-linkedin"></i>
                                            </a>
                                            <a target="_blank" rel="noopener" href="https://twitter.com/anand0427"
                                               class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                                               data-original-title="Follow us">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                            <a target="_blank" rel="noopener" href="https://github.com/anand0427"
                                               class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                                               data-original-title="Star on Github">
                                                <i class="fa fa-github"></i>
                                            </a>
                                            <a target="_blank" rel="noopener" href="https://www.facebook.com/aLogicGeek"
                                               class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                                               data-original-title="Like us">
                                                <i class="fa fa-facebook"></i>
                                            </a>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center mt-2">
                            <h3>Anand Raparla
                          </h3>
                          <div class="h6 mt-2"><i class="ni business_briefcase-26 mr-1"></i>Data Scientist | Machine Learning Engineer</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>Machine Learning and AI are my primary interests. I aspire to be an all-around scientist in multiple disciplines and I work hard for this goal. I want to build interesting and intelligent systems that can help all kinds of life forms in our world.</p>
                                    <div>
                                    <a href="#" @click="toggleClicked"><base-button type="secondary" textColor = "warning">Show more</base-button></a>
                                    </div>
                                    <div class="alert alert-warning"     role="alert" v-if="isClicked"  >
                                      I will put some more content soon so come back then :)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>

import BaseDropdown from "@/components/BaseDropdown";
    export default {
      components: {
        BaseDropdown
        },
      data() {
        return {
          isClicked: false
        };
      },
      methods: {
        toggleClicked() {
          this.isClicked = !this.isClicked;
        },
    }
};
</script>
<style>
</style>
