<template>
  <div>
    <div className="bg bg-slate-100 font-inter h-screen">
      <div className="lg:container m-auto p-10 bg-blue-100">
        <div class="flex justify-center gap-8">
          <div class="flex flex-col gap-8">
            <section class="flex gap-6">
              <div class="w-[300px]">
                <div class="relative w-40 h-40 overflow-hidden rounded-full">
                  <div class="w-full h-full clip-circle relative">
                    <img
                      src="https://avatars.githubusercontent.com/u/112948083?v=4"
                      alt="me"
                      class="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <h1 class="">
                  <div class="font-ms font-semibold text-xl">Rina H</div>
                  <div class="h">Taiwan</div>
                </h1>
              </div>

              <div class="w-[600px] border-black-150 border rounded-sm p-5">
                <h1>Hi ! I'm Rina.</h1>
              </div>
            </section>
            <section class="flex flex-col gap-3">
              <h1 class="font-ms font-semibold text-3xl">My works</h1>
              <div class="flex gap-3">
                <div class="w-[400px] flex flex-col gap-4">
                  <div class="w-[300px] bg-white rounded-xl p-5">
                    <img alt="Vue logo" src="../assets/logo.png" />
                  </div>
                  <div class="flex flex-col">
                    <h2 class="flex">
                      示範網站｜
                      <div class="w-[30px]">
                        <img alt="Vue logo" src="../assets/logo.png" />
                      </div>
                      Vue 專案
                    </h2>
                    <h1 class="font-bold text-2xl">meowsakka 官方網站</h1>
                  </div>

                  <div class="flex gap-1">
                    <span class="h bg-yellow-200 px-2 py-1 rounded-xl font-bold"
                      >vue</span
                    >
                    <span class="h bg-yellow-200 px-2 py-1 rounded-xl font-bold"
                      >flex</span
                    >
                    <span class="h bg-yellow-200 px-2 py-1 rounded-xl font-bold"
                      >tailwind CSS</span
                    >
                  </div>
                  <div class="flex gap-3">
                    <span
                      class="bg-[#FFB5DD] px-2 py-1 rounded-lg font-bold text-2xl"
                    >
                      <router-link to="/meowsakka">觀看網址</router-link></span
                    >
                    <span
                      class="bg-[#FFB5DD] px-2 py-1 rounded-lg font-bold text-2xl"
                      ><a href="" class="href">程式碼</a></span
                    >
                  </div>
                </div>
                <div class="w-[400px]">
                  <router-link to="/hello"
                    >My Vue Project Playground.</router-link
                  >
                </div>
              </div>
            </section>
          </div>
        </div>
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
