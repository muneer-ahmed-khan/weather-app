<template>
  <div v-for="city in savedCities" :key="city.id">
    <CityCard :city="city" @click="goToCityView(city)" />
  </div>

  <p v-if="savedCities.length === 0">
    No location added. To start tracking a location, search in the field above.
  </p>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import CityCard from "@/components/ui/CityCard.vue";
import config from "@/config";

const savedCities = ref([]);
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const requests = [];
  savedCities.value.forEach((city) => {
    requests.push(
      axios.get(
        `${config.openWeatherWeatherApi}?lat=${city.coords.lat}&lon=${city.coords.lng}&exclude={part}&appid=${config.openWeatherAppId}&units=metric`
      )
    );
  });

  const weatherData = await Promise.all(requests);

  await new Promise((res) => setTimeout(res, 1000));

  weatherData.forEach((value, index) => {
    savedCities.value[index].weather = value.data;
  });
};
await getCities();

const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "cityView",
    params: {
      state: city.state,
      city: city.city,
    },
    query: {
      id: city.id,
      lat: city.coords.lat,
      lng: city.coords.lng,
    },
  });
};
</script>
