<template>
<header>
  <div class="header">

    <div class="left_container ">


      <span>
                      <router-link to="/">
                       <img src="/src/img/exposit3.png" alt="">
                       </router-link>
</span>
      <span>


                        <router-link to="/">
                            <p>Главная</p>
                        </router-link>

</span>
      <span>

                        <router-link to="/contacts">
                            <p>Контакты</p>
                        </router-link>

</span>


    </div>


    <div class="search_cont">


      <div class="search">
        <input type="search" name="" v-model="searchQuery" placeholder="Введите текст">

      </div>
    </div>

    <div class="right_container">

<span>

      <div class="dropdown">
        <p>
          <dropDown></dropDown>
        </p>
      </div>
</span>

<span>

      <router-link to="/singIn">
        <div class="reg">
          <p>Войти</p>
        </div>
      </router-link>
</span>

<span>
      <router-link to="/registration">
        <div class="reg">
          <p>Регистрация</p>
        </div>
      </router-link>
</span>


    </div>

  </div>



</header>
</template>




<script>
import dropDown from './dropDown.vue'
export default {
  name: 'myheader',
  data() {
    return {
      show: false,
      searchQuery: null
    };
  },
  components: {
    dropDown
  }
}
</script>

<style scoped>
header {
  background-color: #039BE5 !important;
  font-size: 20px;
  font-weight: 300;
  padding-left: 15px;
  max-height: 80px;
}


.header {
  display: flex;
  flex-direction: row;
  height: 80px;
}

header p {
  color: white;
}

.left_container {
  width: 25%;
  margin-bottom: 20px;
}

li {
  display: inline-block;
  margin-left: 10px;
}

.left_container span {
  display: inline-block;
  margin-left: 10px;
  padding-top: 10px;
}
.right_container span {
  display: inline-block;
  margin-left: 10px;
  padding-top: 5px;

}

.reg>p {
  font-size: 20px;
  background-color: #ef7f35;
  padding: .5em 1.3em;
  border-radius: 5px;
}


.right_container {
  display: inline-block;
  float: right;
  margin-right: 20px;
  padding: 0px;
  width: 25%;
}


img {
  height: 50px;
  margin-right: 30px;
}

a:hover {
  text-decoration: none !important;
}


.search {
  display: inline-block;
  box-shadow: inset rgba(166, 190, 205, .3) 2px 3px 2px;
  border-radius: 10PX;
  background-color: white;
  padding-left: 7px;
  border-bottom: none!important;
width: 95%;
  height: 40px;
}

input {
  line-height: 3;
  font-size: 20px;
  cursor: pointer;

  float: right;
}

::-webkit-input-placeholder {
  color: gray;
}


input[type=search] {
  box-shadow: none;
  border-bottom: none!important;
}


input[type=search]:active {
  border-bottom: none!important;
  box-shadow: none;
}

input[type=search]:focus {
  border-bottom: none;
  box-shadow: none;
}

.search_cont {
  width: 50%;
  align-self  : center;
}
</style>
