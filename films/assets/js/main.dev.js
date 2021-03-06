"use strict";

var OMDB_API_KEY = 'a598057';
var app = Vue.createApp({
  data: function data() {
    return {
      search_query: 'Batman',
      movieList: [],
      movie_info: [],
      showModal: false,
      favorites: [],
      page: 1,
      blocksView: true,
      showFav: true
    };
  },
  created: function created() {
    window.goToPage = this.goToPage.bind(this);
    var fav_list = localStorage.getItem('favorites');

    if (fav_list != null) {
      this.favorites = JSON.parse(fav_list); // console.log(this.favorites);
    }

    var view = this.getCookie('view');

    if (typeof view != 'undefined') {
      if (view == 'blocks') {
        this.blocksView = true;
      } else {
        this.blocksView = false;
      }
    }
  },
  methods: {
    searchMovie: function searchMovie(reset_page) {
      var _this = this;

      if (this.searchMovie != '') {
        if (reset_page) {
          this.page = 1;
        }

        axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&s=' + this.search_query + '&page=' + this.page).then(function (resp) {
          // console.log(JSON.stringify(resp.data.Search));
          if (resp.data.Response == 'True') {
            _this.movieList = resp.data.Search;

            _this.pagination(resp.data.totalResults);
          } else {
            vanillaToast.error('Movie is not found!', {
              closeButton: true
            });
          }

          ;
          document.getElementById('btn-search').classList.toggle('animate__hinge');
        })["catch"](function (err) {
          console.log(err);
        });
      }
    },
    pagination: function pagination(total) {
      var per_page = 10;
      var pages = Math.floor(total / per_page);
      var list = '';

      if (this.page > 1) {
        list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page - 1, ")\">Previous</a></li>"); //list = `<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="goToPage(${this.page+1})">Next</a></li>`;

        list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(1)\">1</a></li>";

        if (this.page > 3) {
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">...</a></li>";
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page - 2, ")\">").concat(this.page - 2, "</a></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page - 1, ")\">").concat(this.page - 1, "</a></li>");
        }

        ;

        if (this.page <= pages - 3) {
          list += "<li class=\"page-item active\"><span class=\"page-link\">".concat(this.page, "</span></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page + 1, ")\">").concat(this.page + 1, "</a></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page + 2, ")\">").concat(this.page + 2, "</a></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">...</a></li>";
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(pages, ")\">").concat(pages, "</a></li>");
        }

        ;

        if (this.page == pages - 2) {
          list += "<li class=\"page-item active\"><span class=\"page-link\">".concat(this.page, "</span></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page + 1, ")\">").concat(this.page + 1, "</a></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(pages, ")\">").concat(pages, "</a></li>");
        }

        ;

        if (this.page == pages - 1) {
          list += "<li class=\"page-item active\"><span class=\"page-link\">".concat(this.page, "</span></li>");
          list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(pages, ")\">").concat(pages, "</a></li>");
        }

        ;

        if (this.page == pages) {
          list += "<li class=\"page-item active\"><span class=\"page-link\">".concat(this.page, "</span></li>");
        }

        ;
      }

      ;

      if (this.page < pages) {
        list += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\" onclick=\"goToPage(".concat(this.page + 1, ")\">Next</a></li>");
      }

      document.getElementById('pagination').innerHTML = list;
    },
    goToPage: function goToPage(p) {
      this.page = p;
      this.searchMovie(false);
    },
    getDetail: function getDetail(id) {
      var _this2 = this;

      axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + '&i=' + id).then(function (resp) {
        if (resp.data.Response == 'True') {
          _this2.movie_info = resp.data;

          _this2.toggleModalDetail(true);
        } else {
          vanillaToast.error('Sorry, we have some problems here.', {
            closeButton: true
          });
        }

        console.log(resp.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleModalDetail: function toggleModalDetail(show) {
      this.showModal = show;
      document.getElementById('exampleModal').style.display = show ? 'block' : 'none';
    },
    toggleFavorites: function toggleFavorites(item) {
      var a = this.favorites.findIndex(function (el) {
        return el.imdbID == item.imdbID;
      });

      if (a == -1) {
        this.favorites.push(item);
        vanillaToast.success('Movie added to Favorites!');
      } else {
        this.favorites.splice(a, 1);
        vanillaToast.info('Movie removed from Favorites!'); // document.getElementById('fav_btn').classList.toggle('btn-warning');
      }

      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    toggleView: function toggleView(is_block) {
      if (this.blocksView != is_block) {
        this.blocksView = is_block;
        var view = is_block ? 'blocks' : 'rows';
        this.setCookie('view', view, {
          expires: 60 * 60 * 24 * 365
        });
      }
    },
    setCookie: function setCookie(name, value, props) {
      props = props || {};
      var exp = props.expires;

      if (typeof exp == "number" && exp) {
        var d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
      }

      if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
      }

      value = encodeURIComponent(value);
      var updatedCookie = name + "=" + value;

      for (var propName in props) {
        updatedCookie += "; " + propName;
        var propValue = props[propName];

        if (propValue !== true) {
          updatedCookie += "=" + propValue;
        }
      }

      document.cookie = updatedCookie;
    },
    getCookie: function getCookie(name) {
      var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
  }
});
app.component('movie_item', {
  props: ['item'],
  methods: {
    getDetail: function getDetail(id) {
      this.$parent.getDetail(id);
    },
    toggleFavorites: function toggleFavorites(item) {
      this.$parent.toggleFavorites(item);
    }
  },
  template: '#movie_item'
});
app.component('fav_item', {
  props: ['item'],
  methods: {
    getDetail: function getDetail(id) {
      this.$parent.getDetail(id);
    },
    toggleFavorites: function toggleFavorites(item) {
      this.$parent.toggleFavorites(item);
    }
  },
  template: '#fav_item'
});
app.mount('#app');