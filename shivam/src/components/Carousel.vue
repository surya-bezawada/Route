<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-circle-left fa-3x"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-circle-right fa-3x"></i>
      </div>
    </div>

    <div v-if="paginationEnabled" class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.pagination
    );
    const timeoutDuration = ref(
      props.timeout === undefined ? 5000 : props.pagination
    );
    const paginationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };
    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      paginationEnabled,
      navEnabled,
    };
  },
};
</script>

<style scoped>
.navigate {
  padding: 0 16px;
  width: 100%;
  position: absolute;
  top: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle-page {
  display: flex;
  flex: 1;
}
.right {
  justify-content: flex-end;
}
i {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: crimson;
  color: white;
}
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  margin-bottom: 80px;
}
span {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0.5px 3px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.active {
  background-color: crimson;
}
</style>
