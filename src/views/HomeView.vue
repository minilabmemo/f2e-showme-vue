<template>
  <div>
    <div className="bg bg-slate-100 font-inter">
      <div className="3xl:container m-auto p-10">
        <section class="flex gap-6">
          <div>
            <div class="w-[300px]">
              <img
                src="https://avatars.githubusercontent.com/u/112948083?v=4"
                alt="me"
              />
            </div>

            Rina Huang
          </div>

          <div>
            <h1>Here is MY VUE project playground.</h1>
            <div class="w-[45px]">
              <img alt="Vue logo" src="../assets/logo.png" />
            </div>
          </div>
        </section>
        <section>
          <h1 class="">作品集</h1>
          <router-link to="/meowsakka">f2e-election-meowsakka</router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
