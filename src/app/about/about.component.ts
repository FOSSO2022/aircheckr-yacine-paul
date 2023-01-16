import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
    <!-- END NAV -->

    <section class="hero is-info is-medium is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">les élèves ingenieur ISEN Toulon Majeure Smart Energy Promo 2024</h1>
            </div>
        </div>
    </section>


    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">Présentation des membres du groupe Aircheckr API</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">@skeetskeet</span>
                                    <span class="tag is-rounded">Janvier 2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <p>l'API aircheckr expose des données basées sur la qualité de l'air dans les pays européens en donnant plus de statistiques des villes Belges</p>


                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-center">
                                <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" class="author-image" alt="Placeholder image">
                            </div>
                            <div class="media-content has-text-centered">
                                <p class="title article-title">Paul CONTAL 🔱</p>
                                <p class="subtitle is-6 article-subtitle">
                                    <a href="https://www.linkedin.com/in/contal-paul-b29827239/">linkedin</a>
                            </div>
                        </div>
                        <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-center">
                                <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" class="author-image" alt="Placeholder image">
                            </div>
                            <div class="media-content has-text-centered">
                                <p class="title article-title">Yacine FOSSO 🔱</p>
                                <p class="subtitle is-6 article-subtitle">
                                    <a href="https://www.linkedin.com/in/yacine-zorah-fosso-kenfack-072401227/">linkedin</a>
                            </div>
                        </div>
                        <div class="content article-body">

                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->
                <!-- START PROMO BLOCK -->
                <section class="hero is-info is-bold is-small promo-block">

                </section>
                <!-- END PROMO BLOCK -->
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-center">
                                <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" class="author-image" alt="Placeholder image">
                            </div>
                            <div class="media-content has-text-centered">
                                <p class="title article-title">Kahina IDDIR 🔱</p>
                                <p class="subtitle is-6 article-subtitle">

                                </p>
                            </div>
                        </div>
                        <div class="content article-body">

                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->
              </div>

        <!-- END ARTICLE FEED -->
        </div>
        <script async type="text/javascript" src="src/bulma-js.js"></script>
        <script src='src/OverlayScrollbars.min.js'></script>
        <script>
        document.addEventListener("DOMContentLoaded", function() {
        //The first argument are the elements to which the plugin shall be initialized
        //The second argument has to be at least a empty object or a object with your desired options
        OverlayScrollbars(document.querySelectorAll("body"), { });
        });
        </script>`,
  styleUrls: ['./about.component.css']
})




export class AboutComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }


}
